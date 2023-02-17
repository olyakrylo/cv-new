import { FC } from 'react';
import * as fs from 'fs';
import { GetServerSideProps } from 'next';

import { getJsonFromS3 } from '@/features/s3';
import { CVData } from '@/shared/cvData';
import { CVView } from '@/views/cv';

type CVProps = {
  data: CVData | null;
};

const CV: FC<CVProps> = ({ data }) => {
  if (!data) {
    return <h1>:(</h1>;
  }

  return <CVView {...data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data: CVData | null;
  const key = process.env.NEXT_PUBLIC_DATA_KEY as string;

  if (process.env.NODE_ENV === 'development') {
    const file = fs.readFileSync(key, 'utf-8');
    data = JSON.parse(file);
  } else {
    data = await getJsonFromS3<CVData>(key);
  }

  return {
    props: {
      data,
    },
  };
};

export default CV;

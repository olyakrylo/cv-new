import { GetServerSideProps } from 'next';
import { getJsonFromS3 } from '@/features/s3';
import { CVData } from '@/shared/cvData';
import { FC } from 'react';
import cn from 'classnames';
import { Typography } from '@/shared/typography';
import { NavigationMenu } from '@/widgets/navigationMenu';
import styles from './App.module.css';
import { About } from '@/widgets/about';
import { Contacts } from '@/entities/contacts';

type AppProps = {
  data: CVData | null;
};

const App: FC<AppProps> = ({ data }) => {
  if (!data) {
    return <h1>:(</h1>;
  }

  return (
    <div className={cn(Typography.className, styles.Container)}>
      <NavigationMenu contacts={data.contacts} className={styles.Menu} />

      <div className={styles.Content}>
        <About {...data.about} className={styles.Section} />
      </div>

      <div className={styles.Footer}>
        <Contacts contacts={data.contacts} className={styles.FooterContent} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const key = process.env.NEXT_PUBLIC_DATA_KEY as string;
  const data = await getJsonFromS3<CVData>(key);

  return {
    props: {
      data,
    },
  };
};

export default App;

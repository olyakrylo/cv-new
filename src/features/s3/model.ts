import axios from 'axios';

import { s3 } from '@/entities/s3';

export const getJsonFromS3 = async <T>(key: string): Promise<T | null> => {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
    Key: key,
  };

  try {
    const url = await s3.getSignedUrlPromise('getObject', params);
    const result = await axios.get(url);
    return result.data;
  } catch {
    return null;
  }
};

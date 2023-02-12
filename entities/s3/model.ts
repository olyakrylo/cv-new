import { S3 } from "aws-sdk";

export const s3 = new S3({
  region: 'us-east-1',
  accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
  signatureVersion: 'v4',
});

s3.getObject()
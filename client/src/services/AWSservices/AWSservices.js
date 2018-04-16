import ReactS3 from 'react-s3';

const { REACT_APP_accessKeyId, REACT_APP_secretAccessKey } = process.env;

const config = {
  bucketName: 'catmask-upload-demo',
  albumName: 'photos',
  region: 'eu-west-3',
  accessKeyId: REACT_APP_accessKeyId,
  secretAccessKey: REACT_APP_secretAccessKey
}

export function awsUpload(file) {
  return ReactS3.upload(file[0], config)
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
}
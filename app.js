const aws = require('aws-sdk');

const totalUsed = async (Prefix, isSubFolder = true, keys) => {
  try {
    const s3 = new aws.S3({
      accessKeyId: keys.accessKeyId,
      secretAccessKey: keys.secretAccessKey,
      endpoint: new aws.Endpoint(keys.endpoint),
      s3ForcePathStyle: true,
    });
    const conf = {
      Bucket: keys.bucket,
      Delimiter: '/',
      Prefix,
    };
    let total = 0;

    const data = await s3.listObjects(conf).promise();
    await data.Contents.forEach((e) => {
      total += e.Size;
    });

    if (data.CommonPrefixes.length && isSubFolder) {
      for (const prx of data.CommonPrefixes) {
        total += await totalUsed(prx.Prefix, isSubFolder, keys);
      }
    }
    return total;
  } catch (error) {
    console.log(error);
  }
};

module.exports = totalUsed;

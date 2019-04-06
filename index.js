const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const accessKeyId = require('./.env').accessKeyId;
const secretAccessKey = require('./.env').secretAccessKey;

//configuring the AWS environment
AWS.config.update({
    accessKeyId,
    secretAccessKey
})

const s3 = new AWS.S3();
const filePath = './data/file.txt';

//configuring parameters
const params = {
    Bucket: 'btam-s3-practice',
    Body: fs.createReadStream(filePath),
    Key: 'folder/' + Date.now() + '_' + path.basename(filePath)
}

s3.upload(params, (err, data) => {
    //handle error
    if(err) console.log('Error', err);

    //success
    if(data) console.log('Uploaded in:', data.Location);
})
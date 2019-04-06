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
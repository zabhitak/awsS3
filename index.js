const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
});

var s3 = new AWS.S3();
var filePath = './foo.csv';

var params = {
  Bucket: 'zabhi',
  Body: fs.createReadStream(filePath),
  Key: 'folder/' + Date.now() + '_' + path.basename(filePath),
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log('Error', err);
  }

  //success
  if (data) {
    console.log('Uploaded in:', data.Location);
  }
});

//Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(data);
    console.log('Success', data.Buckets);
  }
});

// Create the parameters for calling createBucket
var bucketParams = {
  Bucket: 'zaaaaabhitak',
};

// // call S3 to create the bucket
s3.createBucket(bucketParams, function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.Location);
  }
});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket: 'zabhi',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data);
  }
});

var params = {Bucket: 'zabhi', Key: 'your object'};

//delete object in a bucket
s3.deleteObject(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(); 
});

  var bucketParams = {
    Bucket : 'zabhi'
  };

//   // Call S3 to delete the bucket
  s3.deleteBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

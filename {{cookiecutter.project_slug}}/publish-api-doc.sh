#!/usr/bin/env bash
if [ "$1" = "" ]; then
    echo "Provide a bucket as argument"
    exit -1
fi
BUCKET_API="$1"
npm run build-all
aws s3 cp dist "s3://${BUCKET_API}/{{cookiecutter.project_name}}" --exclude\
  ".git/*" --exclude ".idea" --recursive --acl public-read
echo "https://$BUCKET_API.s3.amazonaws.com/{{cookiecutter.project_name}}/index.html"

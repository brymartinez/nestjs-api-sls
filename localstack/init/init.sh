awslocal dynamodb create-table \
    --table-name UniqueIDGenerator \
    --key-schema AttributeName=UniqueIDSequence,KeyType=HASH \
    --attribute-definitions AttributeName=UniqueIDSequence,AttributeType=S \
    --billing-mode PAY_PER_REQUEST \
    --region ap-southeast-1
awslocal dynamodb put-item --table-name UniqueIDGenerator --item '{"UniqueIDSequence": { "S": "UniqueIDSequence" },"ABC": { "N": "1000" },"DEF": { "N": "3000" },"GHI": { "N": "500" }}' --region ap-southeast-1
awslocal ssm put-parameter --name /localstack/connstring --value postgres://postgres:example@localhost:5432/postgres --region ap-southeast-1

# cloudFormationDeploy

reqs
 - KeyPair
 - Sec group
   - Open port 80 & 22
   - SecGroupId
 - ElasticIp
   - AllocationId
 - Machine Image recipe
   - Different tests
   - [Custom Component for nGinx](./NGINXComponent.yml)
   - Pipeline to get ImageId 
 - IAM role & credentials for workflows
   - Recommended policies
     - AmazonEC2FullAccess
     - AWSCloudFormationFullAccess
   - Add secrets to github repo
     - AWS_ACCESS_KEY_ID
     - AWS_SECRET_ACCESS_KEY
 - Change IP address in deploy test check server response to be your elasticIp
import json
import boto3
ec2 = boto3.client('ec2',region_name="us-east-1")

def lambda_handler(event, context):
    # TODO implement
    response = ec2.describe_availability_zones()
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }

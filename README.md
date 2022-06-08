# cookbook-github-actions

Pre-req
1. Create AWS IAM access key
2. Populate GitHub secrets with AWS IAM access key

Workflow

1. When push to github branch in terraform directory, run terraform plan
2. When PR on branch, put terraform plan in comment
3. When merge to main, terraform apply

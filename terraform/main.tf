resource "aws_dynamodb_table" "terraform_github_actions_example" {
  name         = "terraform-github-actions-example"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "KeyId"

  attribute {
    name = "KeyId"
    type = "S"
  }
}

resource "aws_dynamodb_table" "ju-github" {
  name         = "ju-github3"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "KeyId"

  attribute {
    name = "KeyId"
    type = "S"
  }
}
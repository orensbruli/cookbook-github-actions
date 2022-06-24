terraform {
  required_version = "1.2.3"
  required_providers {
    aws = {
      version = "3.69.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

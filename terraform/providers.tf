terraform {
  required_version = "0.15.0"
  required_providers {
    aws = {
      version = "3.69.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}
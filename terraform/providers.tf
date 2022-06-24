terraform {
  required_version = "1.2.3"
  required_providers {
    aws = {
      version = "4.20.1"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

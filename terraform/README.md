## Terraform GitHub Actions

The general GitHub workflow for Terraform

* When Terraform code is checked into a non-`main` branch, GitHub automatically runs
`terraform plan` on the `dev` cloud environment
* When Terraform code is checked into `main` branch, GitHub automatically runs
  `terraform apply` on the `dev` cloud environment
* Users can manually invoke `terraform plan` on any environment
* Users can manually invoke `terraform apply` on any environment

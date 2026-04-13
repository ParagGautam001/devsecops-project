terraform {
  backend "s3" {
    bucket         = "parag-devsecops-tf-state"
    key            = "devsecops/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
  }
}

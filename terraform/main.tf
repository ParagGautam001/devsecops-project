provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "devsecops" {
  ami           = "ami-0c02fb55956c7d316" # Ubuntu for us-east-1
  instance_type = "t2.micro"

  tags = {
    Name = "devsecops-terraform"
  }
}

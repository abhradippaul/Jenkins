@Library("Shared") _
pipeline{
  agent {label 'aws-client'};

  stages{
    stage("Git Clone"){
      steps{
        script{
          clone()
        }
      }
    }
    stage("Building Image"){
      steps{
        script{
          dockerimage("backend-image")
        }
      }
    }

  stage("Push to DockerHub"){
      steps{
        script{
          pushtodockerhub()
        }
      }
    }

  stage("Create Container"){
      steps{
        script{
          dockercontainer()
        }
      }
    }

  stage("Test Container"){
      steps{
        script{
          testcontainer()
        }
      }
    }
  }
}

@Library("Shared") _
pipeline{
  agent any;

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
          dockerimage()
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

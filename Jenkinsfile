pipeline{
    agent any
    stages{
        stage("First Stage"){
           steps{
               script{
                   hello()
               }
           }
        }
        stage("Code Clone"){
           steps{
                script{
                    git url: "https://github.com/abhradippaul/Jenkins.git", branch: "main"
                }
           }
        }
    }
    
}

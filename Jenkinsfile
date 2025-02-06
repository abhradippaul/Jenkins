pipeline{
    agent any
    stages{
        stage("First Stage"){
           steps{
               echo "Hello world"
           }
        }
        stage("Code Clone"){
           steps{
                    git url: "https://github.com/abhradippaul/Jenkins.git", branch: "main"
           }
        }
    }
    
}

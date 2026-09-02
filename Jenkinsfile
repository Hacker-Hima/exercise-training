pipeline{
    agent any
    stages{
        stage('install'){
           steps{
            bat 'npm install'
           }
        }
        stage('building'){
            steps{
                bat 'npm run build'
            }
        }
        stage('deploy'){
            steps{
                bat 'npm run dev'
            }
        }
    }
}
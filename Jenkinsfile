pipeline {
    agent any
    tools {
        nodejs '18.17.0'
    }
    options {
        timeout(time: 15, unit: 'MINUTES')
    }
    stages {
        stage('Installing node modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
pipeline {
    agent any
    tools {
        nodejs 'Latest'
    }
    options {
        timeout(time: 5, unit: 'MINUTES')
    }
    stages {
        stage('Install Jest dependencies') {
            steps {
                sh 'npm install jest --save-dev'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
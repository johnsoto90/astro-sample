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
                sh 'npm install --save-dev jest'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
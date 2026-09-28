pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t student-attendance-system .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop student-attendance-container || exit /b 0'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm student-attendance-container || exit /b 0'
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 8081:80 --name student-attendance-container student-attendance-system'
            }
        }

    }
}
pipeline {
    agent any
    environment {
        LOGIN_EMAIL = credentials('LumaUsername')
        LOGIN_PASSWORD = credentials('LumaPassword')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Smoke Tests') {
            steps {
                script {
                    echo "Prosleđene varijable: ${env.LOGIN_EMAIL}, ${env.LOGIN_PASSWORD}"
                }
                bat """
                set LOGIN_EMAIL=${env.LOGIN_EMAIL}
                set LOGIN_PASSWORD=${env.LOGIN_PASSWORD}
                npx wdio run wdio.conf.js
                """
            }
        }
    }
    post {
        always {
            echo "Pipeline finished."
        }
        success {
            echo "Smoke tests passed successfully!"
        }
        failure {
            echo "Smoke tests failed. Check logs for more details."
        }
    }
}
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
        stage('Create .env File') {
            steps {
                script {
                    writeFile file: '.env', text: """LOGIN_EMAIL=${env.LOGIN_EMAIL}
LOGIN_PASSWORD=${env.LOGIN_PASSWORD}
"""
                    echo '.env file created successfully.'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npm install webdriver-manager'
                bat 'npx webdriver-manager update'
            }
        }
        stage('Run Smoke Tests') {
            steps {
                script {
                    echo "LOGIN_EMAIL: ${env.LOGIN_EMAIL}"
                    echo "LOGIN_PASSWORD: ${env.LOGIN_PASSWORD}"
                }
                bat 'npx wdio run wdio.conf.js --spec ./test/specs/smoke-test.js'
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
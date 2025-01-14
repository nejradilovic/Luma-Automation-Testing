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
                    echo 'Email: ${env.LOGIN_EMAIL}'
                    echo 'Password: ${env.LOGIN_PASSWORD}'
                }
                bat 'npx wdio run wdio.conf.js --spec ./test/specs/smoke-test.js --email=${env.LOGIN_EMAIL} --password=${env.LOGIN_PASSWORD}'
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

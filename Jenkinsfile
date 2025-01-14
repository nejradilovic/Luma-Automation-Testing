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
                    withEnv(["LOGIN_EMAIL=${process.env.LOGIN_EMAIL}", "LOGIN_PASSWORD=${process.env.LOGIN_PASSWORD}"]) {
                        bat '''
                        set LOGIN_EMAIL=${LOGIN_EMAIL}
                        set LOGIN_PASSWORD=${LOGIN_PASSWORD}
                        npx wdio run wdio.conf.js --spec ./test/specs/smoke-test.js
                        '''
                    }
                }
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
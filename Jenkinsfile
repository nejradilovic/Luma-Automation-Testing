pipeline {
    agent any
    environment {
        LOGIN_EMAIL = credentials('LumaUsername')
        LOGIN_PASSWORD = credentials('LumaPassword')
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    bat 'git clone --branch jenkins-credentials https://github.com/nejradilovic/Luma-Automation-Testing.git'
                    dir('Luma-Automation-Testing') {
                        echo 'Repository cloned successfully from branch jenkins-credentials.'
                    }
                }
            }
        }
        stage('Create .env File') {
            steps {
                script {
                    writeFile file: 'Luma-Automation-Testing/.env', text: """LOGIN_EMAIL=${env.LOGIN_EMAIL} LOGIN_PASSWORD=${env.LOGIN_PASSWORD}"""
                    echo '.env file created successfully.'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    dir('Luma-Automation-Testing') {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Run Smoke Tests') {
            steps {
                script {
                    echo "LOGIN_EMAIL: ${env.LOGIN_EMAIL}"
                    echo "LOGIN_PASSWORD: ${env.LOGIN_PASSWORD}"
                    dir('Luma-Automation-Testing') {
                        bat 'npx wdio run wdio.conf.js --spec ./test/specs/smoke-test.js'
                    }
                }
            }
        }
        stage('Generate Allure Report') {
            steps {
                script {
                    dir('Luma-Automation-Testing') {
                        bat 'npx allure generate allure-results'
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
            script {
                allure includeProperties: false, jdk: '', results: [[path: 'Luma-Automation-Testing/allure-results']]
            }
        }
        failure {
            echo "Smoke tests failed. Check logs for more details."
            script {
                allure includeProperties: false, jdk: '', results: [[path: 'Luma-Automation-Testing/allure-results']]
            }
        }
    }
}

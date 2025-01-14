pipeline {
    agent any
    environment {
        LOGIN_CREDENTIALS = credentials('LumaLogin') // Ovo koristi samo jedan credentials entry
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
                    // Provera vrednosti environment varijabli (za debugging, obično se ukloni kasnije)
                    echo "Using credentials: ${env.LOGIN_CREDENTIALS_USR} / ${env.LOGIN_CREDENTIALS_PSW}"
                }
                // Postavljanje varijabli za CMD
                bat 'set LOGIN_EMAIL=%LOGIN_CREDENTIALS_USR%'
                bat 'set LOGIN_PASSWORD=%LOGIN_CREDENTIALS_PSW%'
                
                // Pokretanje testova
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

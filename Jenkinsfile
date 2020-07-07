pipeline {
    
    agent {
        label {
            label ""
            customWorkspace "${env.HOME}/qa-end-to-end"
        }
    }


  tools {nodejs "node"}

  stages {
        stage('Checkout Shopfloor App') {
            steps {
                dir("${env.HOME}/sfa") {
                echo "Building.."
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
                }
                // build shopfloor app
                dir("${env.HOME}/sfa") {
                sh "/${env.HOME}/qa-end-to-end/buildShopfloorApp.sh"
                } 
            }
        }
        
        stage('Checkout Consumer App') {
            steps {
                dir("${env.HOME}/sof-consumer-app") {
                echo "Building.."
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
                }
                // build consumer app
                dir("${env.HOME}/sof-consumer-app/sof-consumer-app") {
                sh "${env.HOME}/qa-end-to-end/buildConsumerApp.sh"
                }
            }
        }
        
        stage('Checkout Mirror') {
            steps {
                dir("${env.HOME}/mirror/") {
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
            }
                // build mirror
                sh "${env.HOME}/qa-end-to-end/buildMirror.sh"
            }
        }
        
        stage('Checkout End to End Tests') {
            steps {
                dir("${env.HOME}/qa-end-to-end/") {
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
            }       
            }
        }


          stage('Starting End to End Tests') {
            steps {
                echo "Starting End to End Tests"
                dir("${env.HOME}/qa-end-to-end/") {
                sh './tests.sh'
            }
          }
        } 

    }
    
        post('Publish Report') {
          always {
            script {
              allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: '$WORKSPACE/${env.HOME}/app/target/allure-results']]
              ])
            }
            
          
        }
        failure {  
             mail bcc: '', body: "${currentBuild.currentResult} <b>End To End Tests</b><br>Project: ${env.JOB_NAME} <br> Build Number: ${env.BUILD_NUMBER} <br> Build URL: ${env.BUILD_URL}", cc: 'chirag.verma@hotmail.com', charset: 'UTF-8', from: 'chirag.verma@farfetch.com', mimeType: 'text/html', replyTo: 'chirag.verma@farfetch.com', subject: "Failure in End to End Tests -> Build Number: ${env.BUILD_NUMBER}", to: "chirag.verma@farfetch.com";  
            }
        }
        
}  


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
                results: [[path: 'target/allure_results']]
              ])
            }
          }
        }
        
}  


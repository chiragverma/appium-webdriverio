pipeline {
    
    agent {
        label {
            label ""
            customWorkspace "/Users/chirag.verma/qa-end-to-end"
        }
    }


  tools {nodejs "node"}

  stages {
        stage('Checkout Shopfloor App') {
            steps {
                dir("/Users/chirag.verma/sfa") {
                echo "Building.."
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
                }
                // build consumer app
                dir("/Users/chirag.verma/sfa") {
                sh '/Users/chirag.verma/qa-end-to-end/buildShopfloorApp.sh'
                }
                
                
            }
        }
        
        stage('Checkout Consumer App') {
            steps {
                dir("/Users/chirag.verma/sof-consumer-app") {
                echo "Building.."
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
                }
                // build consumer app
                dir("/Users/chirag.verma/sof-consumer-app/sof-consumer-app") {
                sh '/Users/chirag.verma/qa-end-to-end/buildConsumerApp.sh'
                }
            }
        }
        
        stage('Checkout Mirror') {
            steps {
                dir("/Users/chirag.verma/mirror/") {
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
            }
                // build mirror
                sh '/Users/chirag.verma/qa-end-to-end/buildMirror.sh'
                
            }
        }
        
        stage('Checkout End to End Tests') {
            steps {
                dir("/Users/chirag.verma/qa-end-to-end/") {
                sh 'git reset --hard HEAD'
                sh 'git clean -f -d'
                sh 'git pull'
            }
                    
            }
        }


          stage('Starting End to End Tests') {
            steps {
                echo "Starting End to End Tests"
                dir("/Users/chirag.verma/qa-end-to-end/") {
                sh './tests.sh'
            }
          }
        }
        
        stage('Reports') {
            steps {
            script {
            allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'target/allure-results']]
         ])
    }
    }
}
            

    }
}  
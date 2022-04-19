function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gZ786Mzq_/[...]",modelReady)
 }
 function modelReady(){
     classifier.classify(gotResults);
    
 }
 function gotResults(error,results){
     console.log('got result');
     
 }

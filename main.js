//https://teachablemachine.withgoogle.com/models/M56rsVMlr/
var prediction1 = "";
var prediction2 = "";
Webcam.set({
  width: 350,
  height:300,
  image_format: 'png',
  png_quality:100
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img src="+data_uri+" id='captured_image'>";
  });
}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M56rsVMlr/model.json',modelLoaded);
function modelLoaded(){
  console.log("model has been loaded");
}
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first Prediction is "+ prediction1;
  speak_data_2 = "The second Prediction is "+ prediction2;
  var utter_this = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
  synth.speak(utter_this);
}
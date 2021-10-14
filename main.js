prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takephoto() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json',modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak() {
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+prediction1;
    speak2="The second prediction is "+prediction2;
    var utter=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utter);
}
function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);
  
  document.getElementById("result_emotion_name1").innerHTML = results[0].label;
  document.getElementById("result_emotion_name2").innerHTML=results[1].label;
  gesture1= results[0].label;
  gesture2= results[1].label;

  toSpeak = "";

  if(gesture1 == "amazing")
  {
    toSpeak = "This is looking amazing";
    document.getElementById("result_emotion_name1").innerHTML = "&#128076;";
  }
  else if(gesture1 == "best")
  {
    toSpeak = "All the best";
    document.getElementById("result_emotion_name1").innerHTML = "&#128077;";
  }
  else if(gesture1 == "victory")
  {
    toSpeak = "That was the marvelous victory";
    document.getElementById("result_emotion_name1").innerHTML = "&#9996;";
  }

  if(gesture2 == "amazing")
  {
    toSpeak = "This is looking amazing";
    document.getElementById("result_emotion_name1").innerHTML = "&#128076;";
  }
  else if(gesture2 == "best")
  {
    toSpeak = "All the best";
    document.getElementById("result_emotion_name1").innerHTML = "&#128077;";
  }
  else if(gesture2 == "victory")
  {
    toSpeak = "That was the marvelous victory";
    document.getElementById("result_emotion_name1").innerHTML = "&#9996;";
  }
  speak();
}
}

var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    
    var Content = event.results[0][0].transcript.toLowerCase();

    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie in 5 seconds";
    


    setTimeout(function()
    {
        img_id = "selfie1"
        speak_data = "Taking your selfie in 5 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_selfie();
        
    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2";
        speak_data = "Taking your selfie in 10 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_selfie();
        
    }, 10000);

    setTimeout(function()
    {
        img_id = "selfie3";
        speak_data = "Taking your selfie in 15 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_selfie();
        
    }, 15000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
      Webcam.snap(function(data_uri) {
        if(img_id=="selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' +data_uri+"/>";
        }
        if(img_id=="selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' +data_uri+"/>";
        }
        if(img_id=="selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' +data_uri+"/>";
        }
        console.log("function take_selfie()");
    });
}


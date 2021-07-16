prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90

});

Webcam.attach("#Camera")


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capture_img' src=" + data_uri + " >";
    });
};

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/a68PiY82F/model.json", modelloaded);

function modelloaded() {
    console.log("Model Loaded")
}

function speak1() {
    var snyth = window.speechSynthesis;
    speak_data1 = "First Prediction Is " + prediction_1;
    speak_data2 = " And second Prediction Is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    snyth.speak(utterThis);
}


function check() {
    img = document.getElementById('capture_img');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("Predict_1").innerHTML = results[0].label;
        document.getElementById("Predict_2").innerHTML = results[1].label;

        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak1();


        if (results[0].label == "Happy") {
            document.getElementById("emoji_1").innerHTML = "&#128512;";
        
        }
        if (results[0].label == "Sad") {
            document.getElementById("emoji_1").innerHTML = "&#128532;";
        
        }
        if (results[0].label == "Crying") {
            document.getElementById("emoji_1").innerHTML = "&#128546;" + "😭";
        
        }
        if (results[0].label == "Confused") {
            document.getElementById("emoji_1").innerHTML = "🤔🤨";
        
        }
        if (results[0].label == "Anoyyed") {
            document.getElementById("emoji_1").innerHTML = "&#128548;" + "🙄";
        
        }
        if (results[0].label == "Angry") {
            document.getElementById("emoji_1").innerHTML = "&#128545;";
        
        }
        if (results[0].label == "Shy") {
            document.getElementById("emoji_1").innerHTML = "&#128522;";
        
        }
        if (results[0].label == "Surprised") {
            document.getElementById("emoji_1").innerHTML = "😱😲";
        
        }
        if (results[0].label == "Silly") {
            document.getElementById("emoji_1").innerHTML = "😝😜😛";
        
        }
        if (results[0].label == "Sleep") {
            document.getElementById("emoji_1").innerHTML = "😴";
        





        }
        if (results[1].label == "Happy") {
            document.getElementById("emoji_2").innerHTML = "&#128512;";
        
        }
        if (results[1].label == "Sad") {
            document.getElementById("emoji_2").innerHTML = "&#128532;";
        
        }
        if (results[1].label == "Crying") {
            document.getElementById("emoji_2").innerHTML = "&#128546;" + "😭";
        
        }
        if (results[1].label == "Confused") {
            document.getElementById("emoji_2").innerHTML = "🤔🤨";
        
        }
        if (results[1].label == "Anoyyed") {
            document.getElementById("emoji_2").innerHTML = "&#128548;" + "🙄";
        
        }
        if (results[1].label == "Angry") {
            document.getElementById("emoji_2").innerHTML = "&#128545;";
        
        }
        if (results[1].label == "Shy") {
            document.getElementById("emoji_2").innerHTML = "&#128522;";
        
        }
        if (results[1].label == "Surprised") {
            document.getElementById("emoji_2").innerHTML = "😱😲";
        
        }
        if (results[1].label == "Silly") {
            document.getElementById("emoji_2").innerHTML = "😝😜😛";
        
        }
        if (results[1].label == "Sleep") {
            document.getElementById("emoji_2").innerHTML = "😴";
        
        }
    }
}
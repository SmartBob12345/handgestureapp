Webcam.set({
    width: 350,
    height: 300,
    img_format: ".png",
    png_quality: 90
});
webcam = document.getElementById("webcam");
Webcam.attach(webcam);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'handgestureimg' src = " + data_uri + ">";
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-696NRjyS/model.json", loaded);


function loaded() {
    console.log("model is loaded");
}
function predict() {
    handgestureimg = document.getElementById("handgestureimg");
    classifier.classify(handgestureimg, gotResult);
}
function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        prediction1 = result[0].label;
        document.getElementById("predicted_hand_gesture").innerHTML = prediction1;
        if (prediction1 == "Okay") {
            document.getElementById("predicted_emoji").innerHTML = "&#128076";
        }
        if (prediction1 == "Thumbs up") {
            document.getElementById("predicted_emoji").innerHTML = "&#128077";
        }
        if (prediction1 == "'Love you' hand gesture") {
            document.getElementById("predicted_emoji").innerHTML = "&#129311";
        }
    }
}
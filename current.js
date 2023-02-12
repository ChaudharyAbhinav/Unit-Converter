var inputstate = document.getElementById('inputstate').value;
inputstate = "Ampere"
var outputstate = document.getElementById('outputstate').value;
outputstate = "miliampere"
var inputvalue = document.getElementById('inputvalue').value;


function get_value() {
    inputstate = document.getElementById('inputstate').value;
    outputstate = document.getElementById('outputstate').value;
    document.getElementById('from-field').innerText = "From " + inputstate;
    document.getElementById('to-field').innerText = "To " + outputstate;
    inputvalue = document.getElementById('inputvalue').value;
    converter();
}

function converter() {
    inputvalue = document.getElementById('inputvalue').value;

    if (inputstate == "Ampere") {
        if (outputstate == "miliampere") {

            var result = inputvalue * 1000;
            document.getElementById('result').innerHTML = inputvalue + " " + inputstate + " = " + result + " " + outputstate
        }
        else if (outputstate == "biot(Bi)") {
            var result = inputvalue * 0.1;
            document.getElementById('result').innerHTML = inputvalue + " " + inputstate + " = " + result + " " + outputstate
        }
    }
    else if (inputstate == "miliampere") {
        if (outputstate == "Ampere") {

            var result = inputvalue * 0.001;
            document.getElementById('result').innerHTML = inputvalue + " " + inputstate + " = " + result + " " + outputstate
        }
        else if (outputstate == "biot(Bi)") {
            var result = inputvalue * 0.0001;
            document.getElementById('result').innerHTML = inputvalue + " " + inputstate + " = " + result + " " + outputstate
        }
    }
    else if (inputstate == "biot(Bi)") {
        if (outputstate == "Ampere") {

            var result = inputvalue * 10;
            document.getElementById('result').innerHTML = inputvalue + " " + inputstate + " = " + result + " " + outputstate
        }
        else if (outputstate == "miliampere") {
            var result = inputvalue * 10000;
            document.getElementById('result').innerHTML = inputvalue + " " + inputstate + " = " + result + " " + outputstate
        }
    }
}
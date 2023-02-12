var inputstate = document.getElementById("inputstate").value;
inputstate = "Hours";
var outputstate = document.getElementById("outputstate").value;
outputstate = "Seconds";
var inputvalue = document.getElementById("inputvalue").value;




function get_value() {
    inputstate = document.getElementById("inputstate").value;
    outputstate = document.getElementById("outputstate").value;
    document.getElementById("from-field").innerText = "From " + inputstate;
    document.getElementById("to-field").innerText = "To " + outputstate;
    inputvalue = document.getElementById("inputvalue").value;
    converter();


}

function converter() {
    inputvalue = document.getElementById("inputvalue").value;

    if (inputstate == "Hours") {

        if (outputstate == "Minutes") {

            var result = inputvalue * 60;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Seconds") {

            var result = inputvalue * 60 * 60;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
    else if (inputstate == "Minutes") {

        if (outputstate == "Hours") {

            var result = inputvalue / 60;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Seconds") {

            var result = inputvalue * 60;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }



    }

    else if (inputstate == "Seconds") {

        if (outputstate == "Hours") {

            var result = inputvalue / 3600;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Minutes") {

            var result = inputvalue / 60;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }

    }




}

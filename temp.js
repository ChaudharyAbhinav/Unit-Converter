var inputstate = document.getElementById("inputstate").value;
inputstate = "Degree Celsius";
var outputstate = document.getElementById("outputstate").value;
outputstate = "Kelvin";
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

    if (inputstate == "Degree Celsius") {

        if (outputstate == "Fahrenheit") {

            var result = (inputvalue * (9 / 5)) + 32;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Kelvin") {

            var result = ((inputvalue * 2) / 2) + 273.15;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
    else if (inputstate == "Fahrenheit") {

        if (outputstate == "Degree Celsius") {

            var result = (inputvalue - 32) * (5 / 9);
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Kelvin") {

            var result = ((inputvalue - 32) * (5 / 9)) + 273.15;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }



    }

    else if (inputstate == "Kelvin") {

        if (outputstate == "Degree Celsius") {

            var result = inputvalue - 273.15;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Fahrenheit") {

            var result = ((inputvalue - 273.15) * (9 / 5)) + 32;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }

    }




}

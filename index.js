var inputstate = document.getElementById("inputstate").value;
inputstate = "Meter";
var outputstate = document.getElementById("outputstate").value;
outputstate = "Kilometer";
var inputvalue = document.getElementById("inputvalue").value;
inputvalue = 0;



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

    if (inputstate == "Foot") {

        if (outputstate == "Inch") {

            var result = inputvalue * 12;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Meter") {

            var result = inputvalue * 0.3048;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Mile") {

            var result = inputvalue * 0.0001893932;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Centimeter") {

            var result = inputvalue * 30.48;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Kilometer") {

            var result = inputvalue * 0.0003048;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else {
            document.getElementById("result").innerHTML = "Cannot be converted into the same type.Please choose the different unit.";
        }

    }
    else if (inputstate == "Meter") {

        if (outputstate == "Inch") {

            var result = inputvalue * 39.37007874;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Foot") {

            var result = inputvalue * 3.280839895;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Mile") {

            var result = inputvalue * 0.0006213689;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Centimeter") {

            var result = inputvalue * 100;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Kilometer") {

            var result = inputvalue * 0.001;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }




    else if (inputstate == "Kilometer") {

        if (outputstate == "Inch") {

            var result = inputvalue * 39370.07874;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Foot") {

            var result = inputvalue * 3280.839895;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Mile") {

            var result = inputvalue * 0.6213688756;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Centimeter") {

            var result = inputvalue * 100000;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Meter") {

            var result = inputvalue * 1000;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }

    else if (inputstate == "Centimeter") {

        if (outputstate == "Inch") {

            var result = inputvalue * 0.3937007874;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Foot") {

            var result = inputvalue * 0.032808399;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Mile") {

            var result = inputvalue * 0.0000062137;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Kilometer") {

            var result = inputvalue * 0.00001;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Meter") {

            var result = inputvalue * 0.01;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }



    else if (inputstate == "Mile") {

        if (outputstate == "Inch") {

            var result = inputvalue * 63360.23622;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Foot") {

            var result = inputvalue * 5280.019685;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Centimeter") {

            var result = inputvalue * 160935;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Kilometer") {

            var result = inputvalue * 1.60935;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Meter") {

            var result = inputvalue * 1609.35;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }




    else if (inputstate == "Inch") {

        if (outputstate == "Mile") {

            var result = inputvalue * 0.0000157828;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Foot") {

            var result = inputvalue * 0.0833333333;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Centimeter") {

            var result = inputvalue * 2.54;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Kilometer") {

            var result = inputvalue * 0.0000254;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Meter") {

            var result = inputvalue * 0.0254;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }
    else if (inputstate == outputstate) {

        document.getElementById("result").innerHTML = "Cannot be converted into the same type.Please choose the different unit.";

    }


}

var inputstate = document.getElementById("inputstate").value;
inputstate = "Square Meter";
var outputstate = document.getElementById("outputstate").value;
outputstate = "Square Kilometer";
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

    if (inputstate == "Square Foot") {

        if (outputstate == "Square Inch") {

            var result = inputvalue * 144;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Square Meter") {

            var result = inputvalue * 0.09290304;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Square Mile") {

            var result = inputvalue * 0.00000003587;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Acre") {

            var result = inputvalue * 0.0000229568;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Kilometer") {

            var result = inputvalue * 0.0000000929;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else {
            document.getElementById("result").innerHTML = "Cannot be converted into the same type.Please choose the different unit.";
        }

    }
    else if (inputstate == "Square Meter") {

        if (outputstate == "Square Inch") {

            var result = inputvalue * 1550.0031;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Foot") {

            var result = inputvalue * 10.763910417;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Mile") {

            var result = inputvalue * 0.000000003861;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Acre") {

            var result = inputvalue * 0.0002471054;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Kilometer") {

            var result = inputvalue * 0.000001;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }




    else if (inputstate == "Square Kilometer") {

        if (outputstate == "Square Inch") {

            var result = inputvalue * 1550003100;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Foot") {

            var result = inputvalue * 10763910.417;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Mile") {

            var result = inputvalue * 0.3861018768;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Acre") {

            var result = inputvalue * 247.10538147;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Meter") {

            var result = inputvalue * 1000000;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }

    else if (inputstate == "Acre") {

        if (outputstate == "Square Inch") {

            var result = inputvalue * 6272640;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Foot") {

            var result = inputvalue * 43560;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Mile") {

            var result = inputvalue * 0.0015624989;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Kilometer") {

            var result = inputvalue * 0.0040468564;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Meter") {

            var result = inputvalue * 4046.8564224;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }



    else if (inputstate == "Square Mile") {

        if (outputstate == "Square Inch") {

            var result = inputvalue * 4014492529;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Foot") {

            var result = inputvalue * 27878420.34;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Acre") {

            var result = inputvalue * 640.00046695;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Kilometer") {

            var result = inputvalue * 2.58999;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Meter") {

            var result = inputvalue * 2589990;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }




    else if (inputstate == "Square Inch") {

        if (outputstate == "Square Mile") {

            var result = inputvalue * 0.0000000000024909;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Foot") {

            var result = inputvalue * 0.0069444444;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Acre") {

            var result = inputvalue * 0.00000000159422;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Kilometer") {

            var result = inputvalue * 0.0000000000064516;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
        else if (outputstate == "Square Meter") {

            var result = inputvalue * 0.00064516;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;

        }
    }
    else if (inputstate == outputstate) {

        document.getElementById("result").innerHTML = "Cannot be converted into the same type.Please choose the different unit.";

    }


}

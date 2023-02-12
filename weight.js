var inputstate = document.getElementById("inputstate").value;
inputstate = "Kilogram";
var outputstate = document.getElementById("outputstate").value;
outputstate = "Atomic Mass Unit";
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

    if (inputstate == "Kilogram") {

        if (outputstate == "Gram") {

            var result = inputvalue * 1000;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Pound") {

            var result = inputvalue * 2.2046244202;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Atomic Mass Unit") {

            var result = inputvalue * 6.022136652E+26;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        } else if (outputstate == "Metric Tonn") {

            var result = inputvalue * 0.001;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
    else if (inputstate == "Gram") {

        if (outputstate == "Kilogram") {

            var result = inputvalue * 0.001;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Pound") {

            var result = inputvalue * 0.0022046244;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Atomic Mass Unit") {

            var result = inputvalue * 6.022136652E+23;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        } else if (outputstate == "Metric Tonn") {

            var result = inputvalue * 6.022136652E+23;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
    else if (inputstate == "Pound") {

        if (outputstate == "Gram") {

            var result = inputvalue * 453.592;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Kilogram") {

            var result = inputvalue * 453.592;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Atomic Mass Unit") {

            var result = inputvalue * 2.731593008E+26;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        } else if (outputstate == "Metric Tonn") {

            var result = inputvalue * 2.731593008E+26;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
    else if (inputstate == "Atomic Mass Unit") {

        if (outputstate == "Gram") {

            var result = inputvalue * 1.660540199E-24;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Pound") {

            var result = inputvalue * 1.660540199E-24;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Kilogram") {

            var result = inputvalue * 1.660540199E-27;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        } else if (outputstate == "Metric Tonn") {

            var result = inputvalue * 1.660540199E-27;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
    else if (inputstate == "Metric Tonn") {

        if (outputstate == "Gram") {

            var result = inputvalue * 1000000;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Pound") {

            var result = inputvalue * 2204.6244202;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }
        else if (outputstate == "Atomic Mass Unit") {

            var result = inputvalue * 6.022136652E+29;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        } else if (outputstate == "Kilogram") {

            var result = inputvalue * 6.022136652E+29;
            document.getElementById("result").innerHTML = inputvalue + " " + inputstate + " " + " = " + result + " " + outputstate;


        }


    }
}
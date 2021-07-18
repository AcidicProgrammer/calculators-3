function calculate(value) {
    let farenheit = document.getElementById("farenheit").value;
    let celsius = document.getElementById("celsius").value;
    let kelvin = document.getElementById("kelvin").value;
    let delisle = document.getElementById("delisle").value;
    let newton = document.getElementById("newton").value;
    let reaumur = document.getElementById("reaumur").value;
    let rankine = document.getElementById("rankine").value;
    let romer = document.getElementById("romer").value;          

    switch(value) {
        case farenheit:
        this.celsius.value = Math.round((farenheit - 32) * 5/9);
        this.kelvin.value = Math.round((farenheit - 32) * 5/9 + 274.15);
        this.delisle.value = Math.round((farenheit - 32) * 0.83333 - 100.00);
        this.newton.value = Math.round((farenheit - 32) * 11/60);
        this.reaumur.value = Math.round((farenheit - 32) * 4/9);
        this.rankine.value = Math.round(farenheit + 459.67);
        this.romer.value = Math.round((farenheit - 32) * 0.29167 + 7.50);        
        break;

        case celsius:
        this.farenheit.value = Math.round((celsius * 9/5) + 32);
        this.kelvin.value = Math.round(celsius + 273.15);
        this.delisle.value = Math.round(celsius * 1.5000); 
        this.newton.value = Math.round(celsius * 0.33000); 
        this.reaumur.value = Math.round(celsius * 4/5); 
        this.rankine.value = Math.round(celsius * 9/5 + 491.67); 
        this.romer.value = Math.round(celsius * 21/40 + 7.5); 
        break;

        case kelvin:
        this.farenheit.value = Math.round((kelvin - 273.15) * 9/5 + 32);
        this.celsius.value = Math.round(kelvin - 273.15);
        this.delisle.value = Math.round((kelvin - 273.15) * 1.5000);
        this.newton.value = Math.round((kelvin - 273.15) * 0.33000);
        this.reaumur.value = Math.round((kelvin - 273.15) * 0.80000)
        this.rankine.value = Math.round((kelvin - 273.15) * 1.8000 + 491.67);
        this.romer.value = Math.round((kelvin - 273.15) * 0.52500 + 7.50); 
        break;

        case delisle: 
        this.farenheit.value = Math.round((delisle + 100) * 1.2000 + 32);
        this.celsius.value = Math.round((delisle + 100) / 1.5000);
        this.kelvin.value = Math.round((delisle + 100) / 1.5000 + 273.15);
        this.newton.value = Math.round((delisle + 100) * 0.22000);
        this.reaumur.value = Math.round((delisle + 100) * 0.53333)
        this.rankine.value = Math.round((delisle + 100) * 1.2000 + 491.67);
        this.romer.value = Math.round((delisle + 100) * 0.35000 + 7.50); 
        break;

        case newton:
        this.farenheit.value = Math.round(newton * 5.4545 + 32.00);
        this.celsius.value = Math.round(newton / 0.33000);
        this.kelvin.value = Math.round((newton / 0.33000) + 273.15);
        this.delisle.value = Math.round(newton * 4.5455 - 100.00);
        this.reaumur.value = Math.round(newton * 2.4242)
        this.rankine.value = Math.round(newton * 5.4545 + 491.67);
        this.romer.value = Math.round(newton * 1.5909 + 7.50);    
        break;

        case reaumur:
        this.farenheit.value = Math.round(reaumur * 2.2500+ 32);
        this.celsius.value = Math.round(reaumur / 0.80000);
        this.kelvin.value = Math.round((reaumur / 0.80000) + 273.15);
        this.delisle.value = Math.round(reaumur * 1.8750 - 100);
        this.newton.value = Math.round(reaumur * 0.41250);
        this.rankine.value = Math.round(reaumur * 2.2500 + 491.67);
        this.romer.value = Math.round(reaumur * 0.65625 + 7.50);
        break;

        case rankine:
        this.farenheit.value = Math.round(rankine - 459.67);
        this.celsius.value = Math.round((rankine - 491.67) * 5/9);
        this.kelvin.value = Math.round(rankine * 5/9);
        this.delisle.value = Math.round((rankine - 491.67) * 0.83333 - 100);
        this.newton.value = Math.round((rankine - 491.67) * 0.18333);
        this.reaumur.value = Math.round((rankine - 491.67) * 0.44444);
        this.romer.value = Math.round((rankine - 491.67) * 0.29167 + 7.50);
        break;        

        case romer:
        this.farenheit.value = Math.round((romer - 7.5) * 3.4286 + 32);
        this.celsius.value = Math.round(((romer - 7.5) / 0.52500));
        this.kelvin.value = Math.round(((romer - 7.5) / 0.52500) + 273.15);
        this.delisle.value = Math.round((romer - 7.5) * 2.8571 - 100.00);
        this.newton.value = Math.round((romer - 7.5) * 0.62857);
        this.reaumur.value = Math.round((romer - 7.5) * 1.5238);
        this.rankine.value = Math.round((romer - 7.5) * 3.4286 + 491.67);
        break;    
    }

}

// Calculator code:

function calculateVal(command) {
    let output = document.getElementById("output").innerHTML;
    let chosen_value = command.innerHTML;
    let history = document.getElementById("output").innerHTML += chosen_value;

    if(chosen_value == "=" && this.output.innerHTML == "") {
        this.output.innerHTML.replace(undefined, "");
    }
    else if(chosen_value == "=") {
        let answer = eval(output);
        this.output.innerHTML = answer.toLocaleString();
        let history_output = history + answer.toLocaleString();
        document.getElementById("history-here").innerHTML += history_output + "<br>";
    }
    // else if(chosen_value == "DEL") {
    //     let output = document.getElementById("output").innerHTML;
    //     this.output.innerHTML.substr(0, this.output.innerHTML.length - 1); 
    // }
    else if(chosen_value == ".") {
        let output = document.getElementById("output").innerHTML;
        if(this.output.innerHTML !== ".") {
            this.output.innerHTML = "."; // Issue here is that it won't let you type anything before the decimal, only after.
        }
        else {
            // this.output.innerHTML += "";
        }
    }
    // Fix this code since it returns NaN:
    else if(chosen_value == "%") { 
        let percentage = this.output.innerHTML / 100;
        this.output.innerHTML = percentage;
    }
    else if(chosen_value == "AC") {
        document.getElementById("output").innerHTML = "";
        document.getElementById("history-here").innerHTML = "";
    }
}

// Increment & decrementer code:

function increment() {
    let value = parseInt(document.getElementById('number').innerHTML);
    value++;
    document.getElementById('number').innerHTML = value;

    if(value < 10) {
        value.style.color = "red";
    }
}   

function decrement() {
    let value = parseInt(document.getElementById('number').innerHTML);
    value--;
    document.getElementById('number').innerHTML = value;
}   



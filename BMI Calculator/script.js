const forms = document.querySelector('form');
let div = document.querySelector("._result");

forms.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    const decision = document.querySelector('#decision')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const BMI = (weight / ((height*height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML =`<span>${BMI}</span>`;
        if(BMI < 18.6){
            decision.innerHTML = "<span>Under Weight</span>";
            div.style.backgroundColor ="yellow";
        } else if(BMI < 24.9  && BMI > 18.6){
            decision.innerHTML = "<span>Normal range</span>";
            div.style.backgroundColor ="green";

        } else {
            decision.innerHTML = "<span>Over Weight</span>";
            div.style.backgroundColor ="red";
        }
    }
})
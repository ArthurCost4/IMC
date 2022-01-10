let submit = document.getElementById("cu");


document.getElementById("cu").addEventListener("click", function(ev){
    ev.preventDefault()
    let altura = document.getElementById("number").value;
    let peso = document.getElementById("peso").value;
    let name = document.getElementById("name").value;
    let saida = document.getElementById("saida");

    if(name !== "" && peso !== "" && altura !== ""){
        let result = peso / (altura * altura)
        result = result.toFixed(2)

        if(result < 24.9 && result>18){
            saida.innerHTML = `Olá, ${name.bold()} tudo bom? o seu peso é ${peso.bold()} e a sua altura ${altura.bold()} resultando no imc de ${result.bold()}<br>ou seja, o seu peso está no ideal`
        }
        if(result < 29.9 && result>25){
            saida.innerHTML = `Olá, ${name.bold()} tudo bom? o seu peso é ${peso.bold()} e a sua altura ${altura.bold()} resultando no imc de ${result.bold()}<br>ou seja, o seu peso está no Moderado(pré obesidade)`
        }
        if(result < 34.9 && result>30){
            saida.innerHTML = `Olá, ${name.bold()} tudo bom? o seu peso é ${peso.bold()} e a sua altura ${altura.bold()} resultando no imc de ${result.bold()}<br>ou seja, o seu peso está no alto(obesidade de grau l)<br>Por Favor provure um médico`
        }
        if(result < 39.9 && result>35){
            saida.innerHTML = `Olá, ${name.bold()} tudo bom? o seu peso é ${peso.bold()} e a sua altura ${altura} resultando no imc de ${result.bold()}<br>ou seja, o seu peso está no muito alto(obesidade de grau ll)<br>Por Favor provure um médico`
        }
        if(result > 40){
            saida.innerHTML = `Olá, ${name.bold()} tudo bom? o seu peso é ${peso.bold()} e a sua altura ${altura.bold()} resultando no imc de ${result.bold()}<br>ou seja, o seu peso está no muito Extremo(obesidade de grau lll)<br>Por Favor provure um médico`
        }
        if(result<18){
            saida.innerHTML = `Ta com problema de peso`
        }
        
    }else{
        alert("Preencha os campos por favor");
    }
    
})


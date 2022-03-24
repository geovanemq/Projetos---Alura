
function calcular () {
let peso = Number(document.getElementById('peso').value)
let altura = Number(document.getElementById('altura').value) / 100
let res = document.getElementById('res')
if( peso  == 0 || altura == 0){
    res.innerHTML = "preencha os dados para ober os valores"
    //alert(' preencha os dados para obter os valores')
} else { // todo o restante do comando tem que estar em else {}
let r = (peso / (altura * altura)).toFixed(1)

if(r < 18.5){
    res.innerHTML = `Seu IMC é <strong>${r} kg/m2.</strong><br> Você esta abaixo do seu peso ideal`
} else if ( r < 24.9){
    res.innerHTML = `Seu IMC é <strong>${r} kg/m2.</strong><br> Parabens você esta no seu peso Ideal`
} else if (r < 29.9) {
    res.innerHTML = `Seu IMC é <strong>${r} kg/m2.</strong><br> Você esta acima do seu peso ideal`
} else if (r < 34.9) {
    res.innerHTML = `Seu IMC é <strong>${r} kg/m2.</strong><br> Você esta em situação de obesidade grau 1`
} else if ( r < 39.9 )
    res.innerHTML = `Seu IMC é <strong>${r} kg/m2.</strong><br> Você esta em sitação de obesidade grau 2 `
 
}

}



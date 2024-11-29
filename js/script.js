import verificaCPF from "./valida-CPF.js";
import gerarCPF from './gerarCPF.js'

const btnValidaCPF = document.getElementById('validar');
const campoCPF = document.getElementById('campoCPF');
const resultadoCPF = document.getElementById('resultadoCPF');
const btnGerarCPF = document.getElementById('gerarCPF');
const CampoCPFGerado = document.getElementById('CampoCPFGerado');

console.log(CampoCPFGerado);


campoCPF.addEventListener('blur', () => {
    campoCPF.classList.remove('invalido');
    campoCPF.classList.remove('valido');
    resultadoCPF.innerHTML = ''
})

btnValidaCPF.addEventListener('click', () => {
    if (campoCPF.value.length >=11){
        verificaCPF(campoCPF, resultadoCPF);
    }else {
        resultadoCPF.innerHTML = 'Insira a quantidade mínima de números'

    }
})

btnGerarCPF.addEventListener('click', () => {
    gerarCPF(CampoCPFGerado);
})



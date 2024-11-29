export default function verificaCPF(campo, resultadoCPF) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(resultadoCPF);

    

    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
    resultadoCPF.innerHTML = "O CPF é inválido";
    campoCPF.classList.add('invalido');
    console.log(campoCPF);
    
    return;
}else {
        campoCPF.classList.add('valido');
            resultadoCPF.innerHTML = "O CPF é válido"
        return;
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    console.log(`Número repetido?: ${numerosRepetidos.includes(cpf)}`)
    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
    
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;        
    }

    soma = (soma * 10) % 11;    
    
    if (soma == 10 || soma == 11) {
        soma = 0;
    }    
    console.log(`Primeiro dígito: ${soma != cpf[9]}`)
    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
    
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;        
    }
    
    soma = (soma * 10) % 11;
    
    if (soma == 10 || soma == 11) { 
        
        soma = 0;
    }
    console.log(`Segundo dígito: ${soma != cpf[10]}`)
    return soma != cpf[10];
}


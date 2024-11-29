export default function gerarCPF(CampoCPFGerado) {
    console.log(CampoCPFGerado);
    
    let novoCPF = '';

    while (novoCPF.length < 9) {
        let digito = parseInt(Math.random() * 10);
        novoCPF += digito;
    }
    gerarPrimeiroDigito(novoCPF, CampoCPFGerado);
}



function gerarPrimeiroDigito(novoCPF, CampoCPFGerado) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += novoCPF[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    novoCPF += soma
    gerarSegundoDigito(novoCPF, CampoCPFGerado)

}

function gerarSegundoDigito(novoCPF, CampoCPFGerado) {

    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += novoCPF[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {

        soma = 0;
    }

    novoCPF += soma;

    CampoCPFGerado.innerHTML = novoCPF;
    

}
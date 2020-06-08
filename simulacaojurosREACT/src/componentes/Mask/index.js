export const cpfMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export function retiraCaracteresEspeciais(value){
    var valor = value;
    
    valor = valor.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    return valor;
}

export function realMaskHome(value) {
    var valor = value;
    valor = valor + '';
    
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ".$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    return valor;
}

export function jurosMask(value) {
    var valor = value;

    valor = valor + '';
    valor = valor.replace(/\D/g, '.')
    valor = valor.replace(/(.\d{2})\d+?$/,'$1')

    return valor;
}


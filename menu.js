function microondas(prato,tempo) {
    if (prato > 5) {
        console.log('PRATO INEXISTENTE');
    }
if (prato == 1 && tempo < 10) {
    console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 1 && (tempo >= 10 && tempo < 20)) {
    console.log('A SUA PIPOCA ESTÁ PRONTA!!!!');
} else if (prato == 1 && (tempo >= 20 && tempo < 30)) {
    console.log('A SUA PIPOCA QUEIMOU!!!!!');
} else if (prato == 1 && tempo >= 30) {
    console.log('KABUMMMMMM......');
}
if (prato == 2 && tempo < 8) {
    console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 2 && (tempo >= 8 && tempo < 16)) {
    console.log('MACARRÃO ESTÁ PRONTA!!!!');
} else if (prato == 2 && (tempo >= 16 && tempo < 24)) {
    console.log('MACARRÃO QUEIMOU!!!!!');
} else if (prato == 2 && tempo >= 24) {
    console.log('KABUMMMMMM......');
}
if (prato == 3 && tempo < 15) {
    console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 3 && (tempo >= 15 && tempo < 30)) {
    console.log('CARNE ESTÁ PRONTA!!!!');
} else if (prato == 3 && (tempo >= 30 && tempo < 90)) {
    console.log('CARNE QUEIMOU!!!!!');
} else if (prato == 3 && tempo >= 90) {
    console.log('KABUMMMMMM......');
}
if (prato == 4 && tempo < 12) {
    console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 4 && (tempo >= 12 && tempo < 24)) {
    console.log('FEIJÃO ESTÁ PRONTA!!!!');
} else if (prato == 4 && (tempo >= 24 && tempo < 36)) {
    console.log('FEIJÃO QUEIMOU!!!!!');
} else if (prato == 4 && tempo >= 36) {
    console.log('KABUMMMMMM......');
}
if (prato == 5 && tempo < 8) {
    console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 5 && (tempo >= 8 && tempo < 16)) {
    console.log('BRIGADEIRO ESTÁ PRONTA!!!!');
} else if (prato == 5 && (tempo >= 16 && tempo < 24)) {
    console.log('BRIGADEIRO QUEIMOU!!!!!');
} else if (prato == 5 && tempo >= 24) {
    console.log('KABUMMMMMM......');
}


}



microondas(1,30);

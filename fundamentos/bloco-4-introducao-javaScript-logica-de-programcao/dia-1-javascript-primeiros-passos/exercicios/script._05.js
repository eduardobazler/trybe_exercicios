function xadres(peca){
    let peca_copia = peca.toLowerCase();
    switch (peca_copia){
        case 'bispo':
            console.log('Anda pra diagonal');
            break;
        case 'cavalo':
            console.log('faz um "L"');
            break;
        case 'torre':
            console.log('anda pra frente');
            break;
        default:
            console.log('Não encontramos essa peça!');
            break;
    }
}

let s = "rei";

xadres(s);
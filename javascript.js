console.log(`
/* --------------
/*  I N I C I O 
/* --------------`);

/* Teclado - Key(letra) vs Keycode(codigo numerico) */
document.addEventListener('keypress', (e) => {
    /* console.log(`You press key: ${e.key} and his keyCode is ${e.keyCode}`) */
    switch (e.key) {
        case 's':
            reproducirNota(0);
            break;
        case 'd':
            reproducirNota(1);
            break;
        case 'f':
            reproducirNota(2);
            break;
        case 'h':
            reproducirNota(3);
            break;
        case 'j':
            reproducirNota(4);
            break;
        case 'k':
            reproducirNota(5);
            break;
        case 'l':
            reproducirNota(6);
            break;
        default:
            break;
    }
}
);

var botones = document.querySelectorAll('button');
console.log(botones);

/* Creacion de notas musicales */
let notas_musicales = []
for (let index = 0; index < botones.length; index++) {
    notas_musicales[index] = index;
    if (botones[index].id) {
        let aux = document.createElement("audio");
        let ruta = `audio/${botones[index].id}.mp3`;
        aux.setAttribute('src', ruta);
        notas_musicales[index] = aux;
        notas_musicales[index].id = botones[index].id;
    }
}
console.log(notas_musicales);

/* Modo de escucha */
botones.forEach(boton => boton.addEventListener('click', (e) => {
    console.log(e.target.id);
    let index = traducirNotaAlIndex(e.target.id);
    resaltarNotaEnTeclado(index);
    reproducirNota(index);
    opacarNotaEnTeclado(index);
}));

function resaltarNotaEnTeclado (index) {
    console.log(`Funcion resaltarNotaEnTeclado: ${index}`);
    
}

function opacarNotaEnTeclado (index) {
    console.log(`Funcion opacarNotaEnTeclado: ${index}`);
}

function traducirNotaAlIndex(notaMusical) {
    switch (notaMusical) {
        case 'do_00':
            return 0;
            break;
        case 're_00':
            return 1;
            break;
        case 'mi_00':
            return 2;
            break;
        case 'fa_00':
            return 3;
            break;
        case 'sol_00':
            return 4;
            break;
        case 'la_00':
            return 5;
            break;
        case 'si_00':
            return 6;
            break;
        case 'do_01':
            return 7;
            break;
        case 're_01':
            return 8;
            break;
        case 'mi_01':
            return 9;
            break;
        case 'fa_01':
            return 10;
            break;
        case 'sol_01':
            return 11;
            break;
        case 'la_01':
            return 12;
            break;
        case 'si_01':
            return 13;
            break;
        default:
            break;
    }
}

function reproducirNota(index) {
    if (notas_musicales[index].error) {
        console.log('Error reproducirNota')
    }
    if (!notas_musicales[index].ended) {
        notas_musicales[index].play();
    }
    notas_musicales[index].play();
    notas_musicales[index].autofocus = true;
    console.log(notas_musicales[index].play());
}

console.log(`
/* --------------
/*    F   I   N 
/* --------------`);
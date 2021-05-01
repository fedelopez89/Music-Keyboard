console.log(`
/* --------------
/*  I N I C I O 
/* --------------`);

/* SELECCION TECLAS DEL TECLADO MUSICAL */
var keys = document.querySelectorAll('li');

/* INICIALIZACION DE Notas_Musicales */
let notas_musicales = []
const notas_cargadas = document.addEventListener('load',
    cargarNotasMusicales(keys, notas_musicales)
);
function cargarNotasMusicales(keys, notas_musicales) {

    for (let index = 0; index < keys.length; index++) {

        notas_musicales[index] = index;

        if (keys[index].id) {
            
            let audioElement= document.createElement("audio");
            let audioPath   = `audio/${keys[index].id}.mp3`;
            audioElement.setAttribute('src', audioPath);

            notas_musicales[index]              = audioElement;
            notas_musicales[index].id           = keys[index].id;
            notas_musicales[index].currentTime  = 0;
            notas_musicales[index].volume       = 1;
            
        }

    }
    return notas_musicales;
}

/* EVENTO KEYPRESS */
document.addEventListener('keypress', (e) => {
    const eKeyLowerCase = e.key.toLowerCase();
    switch (eKeyLowerCase) {
        case 's':
            presionarUnaTecla(0);
            break;
        case 'd':
            presionarUnaTecla(1);
            break;
        case 'f':
            presionarUnaTecla(2);
            break;
        case 'h':
            presionarUnaTecla(3);
            break;
        case 'j':
            presionarUnaTecla(4);
            break;
        case 'k':
            presionarUnaTecla(5);
            break;
        case 'l':
            presionarUnaTecla(6);
            break;
        default:
            break;
    }
}
);

/* EVENTO CLICK */
keys.forEach(boton => boton.addEventListener('click', (e) => {
    /*     console.dir(e.target.id); */
    let index = traducirNotaAlIndex(e.target.id);
    presionarUnaTecla(index);
})
);

/* FUNCIONES */
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

function presionarUnaTecla(index) {
    reproducirNota(index);
    animacionEnTecla(index);
    limpiarStyle(index);
}

function reproducirNota(index) {
    notas_musicales[index].currentTime = 0;
    notas_musicales[index].volume = 1;
    var promisePlay = notas_musicales[index].play();
    if (promisePlay !== undefined) {
        promisePlay.then(function () {
            console.log(`Play OK ${notas_musicales[index].volume}`)
        }).catch(function (error) {
            console.log("ERROR PLAYING")
        });
    }
}

function animacionEnTecla(index) {
    keys[index].style.background = '#ec4f4f';
}

function limpiarStyle(index) {
    setTimeout(() => {
        keys[index].style.background = '';
        keys[index].style.transition = '';
    }, 300);
}

console.log(`
/* --------------
/*    F   I   N 
/* --------------`);
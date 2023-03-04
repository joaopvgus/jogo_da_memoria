var matriz = [
    ['1a', '1b', '1c', '1d'],
    ['2a', '2b', '2c', '2d'],
    ['3a', '3b', '3c', '3d'],
    ['4a', '4b', '4c', '4d']
];

var icones = ['/pictures/banana.png', '/pictures/banana.png', '/pictures/coco.png', '/pictures/coco.png', '/pictures/limao.png', '/pictures/limao.png', '/pictures/mamao.png', '/pictures/mamao.png', '/pictures/maracuja.png', '/pictures/maracuja.png', '/pictures/melancia.png', '/pictures/melancia.png', '/pictures/morango.png', '/pictures/morango.png', '/pictures/uva.png', '/pictures/uva.png'];

var button_start = document.getElementById('start-button');
button_start.addEventListener('click', function (e) {
    setImagens();
})

function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

function setImagens() {
    var icones = ['/pictures/banana.png', '/pictures/banana.png', '/pictures/coco.png', '/pictures/coco.png', '/pictures/limao.png', '/pictures/limao.png', '/pictures/mamao.png', '/pictures/mamao.png', '/pictures/maracuja.png', '/pictures/maracuja.png', '/pictures/melancia.png', '/pictures/melancia.png', '/pictures/morango.png', '/pictures/morango.png', '/pictures/uva.png', '/pictures/uva.png'];
    icones = shuffleArray(icones);
    for (var linha = 0; linha < 4; linha++) {
        for (var coluna = 0; coluna < 4; coluna++) {
            var ref = document.getElementById(matriz[linha][coluna]);

            ref.innerHTML = `<img src=${icones.pop()}></img>`;
        }
    }

    setTimeout(alert('teste'), 90000)
}





function capturaClick() {

}
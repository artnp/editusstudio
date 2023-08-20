function randomR() {
    /////////แก้จำนวน////////////////////////////
    randomNumber = Math.floor(Math.random() * 88) + 1;
    ////////////////////////////////////////////
    imageName = randomNumber + " (1).jpg";
    document.getElementById('original').innerHTML='<img src="https://artnp.github.io/editusstudio/example/img/' + imageName + '" >'
    document.getElementById('retouch').innerHTML='<img src="https://artnp.github.io/editusstudio/example/img/' + randomNumber + ' (2).jpg' + '">'
}
        randomR()

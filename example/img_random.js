function randomR() {
    /////////แก้จำนวน////////////////////////////
    randomNumber = Math.floor(Math.random() * 52) + 1;
    ////////////////////////////////////////////
    imageName = randomNumber + " (1).jpg";
    document.getElementById('original').innerHTML='<img src="img/' + imageName + '" >'
    document.getElementById('retouch').innerHTML='<img src="img/' + randomNumber + ' (2).jpg' + '">'
}
        randomR()

function randomR() {
    /////////แก้จำนวน////////////////////////////
    randomNumber = Math.floor(Math.random() * 33) + 1;
    ////////////////////////////////////////////
    document.getElementById('original').innerHTML='<img src="img/' + imageName + '" >'
    document.getElementById('retouch').innerHTML='<img src="img/' + randomNumber + 'b.jpg' + '">'
}

        randomR()

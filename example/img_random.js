function randomR() {
    /////////แก้จำนวน////////////////////////////
    if (localStorage.getItem('lastestUpdate') !== null) {
        randomNumber = Math.floor(Math.random() * Number(localStorage.getItem('lastestUpdate'))) + 1;
      } else {
        randomNumber = Math.floor(Math.random() * 200) + 1;
      }
    
    imageName = randomNumber + " (1).jpg";
    document.getElementById('original').innerHTML='<img src="../example/img/' + imageName + '" >'
    document.getElementById('retouch').innerHTML='<img src="../example/img/' + randomNumber + ' (2).jpg' + '">'
}
        randomR()
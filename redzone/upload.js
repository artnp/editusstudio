const imgbbUploader = require("imgbb-uploader");
const open = require('open')

imgbbUploader("bbb401948e18592a99b90589f5577378", "C:/Users/mon/Desktop/danger.jpg")
.then(function (res){
clearURL = (res.display_url).replace('https://i.ibb.co/', '')
console.log(clearURL)
open('http://artnp.github.io/editusstudio/redzone/index.html?'+ clearURL)
  })
  .catch((error) => console.error(error));
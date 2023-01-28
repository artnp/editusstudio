var textArray = [
    'ภาพมีปัญหาอยู่หรอ?',
    'รูปเสียรึเปล่า..',
    'โอเคไหม! ที่รัก',
    'วันนี้ทำอะไรดี',
    'ทำอะไรกันดี',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];
randomWord = Math.floor(Math.random()*textArray.length)
document.getElementById('randomword').innerHTML = textArray[randomWord]

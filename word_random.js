var textArray = [
    'ภาพมีปัญหาอยู่หรอ?',
    'รูปเสียรึเปล่า..',
    'โอเคไหม! ที่รัก',
    'วันนี้ทำอะไรดี',
    'ทำอะไรกันดี',
    'หาคนทำไม่ได้หล่ะสิ',
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

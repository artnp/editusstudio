var textArray = [
    'ภาพมีปัญหาอยู่หรอ?',
    'รูปเสียรึเปล่า..',
    'โอเคไหม! ที่รัก',
    'วันนี้ทำอะไรดี',
    'ทำอะไรกันดี',
    'หาคนทำไม่ได้หล่ะสิ',
    'เอายัง',
    'เอ้า..เลื่อน',
    'เจอกันอีกแล้วนะ',
    'ปีนี้ปีไหนแล้ว',
    'อย่าคิดแบบนั้น',
    'วันนี้วันอะไรนะ',
    'ร้อยนึงไหวไหม',
    'ว่าไงวัยรุ่น',
    'อย่างง',
    'จะต่อยอดยังไงดี',
    'เอาไปทำเงินได้ไหม',
    'รอบหน้าเอาเพลงอะไร',
    'คุณกำลังอยู่กับที่ 1 ในวงการ',
    'หาอะไรอยู่',
    'มันเป็นไปไม่ได้หรอก',
    'ตัดสินใจได้ยัง',
    'ไม่เบื่อมั่งหรอ',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
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
function raning() {
    randomWord = Math.floor(Math.random() * textArray.length);
    document.getElementById('randomword').innerHTML = textArray[randomWord];
}
function raning2() {
    randomWord = Math.floor(Math.random() * textArray.length);
    document.getElementById('foot_talk').innerHTML = textArray[randomWord];
}

raning()
raning2()
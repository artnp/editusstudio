function randomR() {
    // สุ่มเลขจำนวนเต็มระหว่าง 1 ถึง 200
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    
    // กำหนดชื่อไฟล์รูปภาพ
    const imageName = `${randomNumber} (1).jpg`;
    
    // ตรวจสอบว่ารูปภาพแสดงหรือไม่
    const originalImageElement = document.getElementById('original');
    if (originalImageElement.querySelector('img')) {
        // ถ้ารูปภาพแสดงอยู่ให้ไม่ทำอะไร
    } else {
        // ถ้ารูปภาพไม่แสดงให้แสดงรูปภาพใหม่
        originalImageElement.innerHTML = `<img src="https://artnp.github.io/editusstudio/example/img/${imageName}" >`;
        const retouchImageElement = document.getElementById('retouch');
        retouchImageElement.innerHTML = `<img src="https://artnp.github.io/editusstudio/example/img/${randomNumber} (2).jpg">`;
    }
}

// เรียกใช้ฟังก์ชัน randomR
randomR();

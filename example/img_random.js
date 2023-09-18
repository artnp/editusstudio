function randomR() {
    // สุ่มเลขจำนวนเต็มระหว่าง 1 ถึง 200
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    
    // กำหนดชื่อไฟล์รูปภาพ
    const imageName = `${randomNumber} (1).jpg`;
    
    // กำหนด URL ของรูปภาพและแสดงใน HTML
    const originalImageElement = document.getElementById('original');
    originalImageElement.innerHTML = `<img src="https://artnp.github.io/editusstudio/example/img/${imageName}" >`;
    
    // กำหนด URL ของรูปภาพที่แก้ไขแล้วและแสดงใน HTML
    const retouchImageElement = document.getElementById('retouch');
    retouchImageElement.innerHTML = `<img src="https://artnp.github.io/editusstudio/example/img/${randomNumber} (2).jpg">`;
}

// เรียกใช้ฟังก์ชัน randomR
randomR();

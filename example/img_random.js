function loadRandomImage() {
    const maxImageNumber = 200;
    const randomNumber = Math.floor(Math.random() * maxImageNumber) + 1;
    const imageName = `${randomNumber} (1).jpg`;
    const imageUrl = `https://artnp.github.io/editusstudio/example/img/${imageName}`;

    const originalImageElement = document.getElementById('original');
    const retouchImageElement = document.getElementById('retouch');

    // ตรวจสอบว่ารูปภาพโหลดไม่สำเร็จ (img not found)
    const img = new Image();
    img.src = imageUrl;
    img.onerror = function () {
        // เรียกฟังก์ชันอีกรอบถ้ารูปภาพไม่พบ
        loadRandomImage();
    };

    // แสดงรูปภาพใน HTML
    originalImageElement.innerHTML = `<img src="${imageUrl}" >`;
    retouchImageElement.innerHTML = `<img src="https://artnp.github.io/editusstudio/example/img/${randomNumber} (2).jpg">`;
}

// เรียกใช้ฟังก์ชันเพื่อโหลดรูปภาพแรก
loadRandomImage();

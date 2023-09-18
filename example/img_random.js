function replaceImageOnError(imageElement, baseImageUrl) {
    imageElement.onerror = function () {
        const randomNumber = Math.floor(Math.random() * 200) + 1;
        const newImageUrl = baseImageUrl + randomNumber + " (1).jpg";
        imageElement.src = newImageUrl;
    };
}

// ใช้ฟังก์ชันนี้ในการกำหนดการกระทำเมื่อรูปภาพไม่พบสำหรับแต่ละรูป
const originalImage = document.getElementById('original').querySelector('img');
const retouchImage = document.getElementById('retouch').querySelector('img');

const originalBaseUrl = "https://artnp.github.io/editusstudio/example/img/";
const retouchBaseUrl = "https://artnp.github.io/editusstudio/example/img/";

replaceImageOnError(originalImage, originalBaseUrl);
replaceImageOnError(retouchImage, retouchBaseUrl);

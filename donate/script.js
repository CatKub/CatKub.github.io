// script.js

function showDonationAlert(name, amount) {
    const alertContainer = document.getElementById('alert-container');
    const donorName = document.getElementById('donor-name');
    const donationAmount = document.getElementById('amount');
    const alertSound = document.getElementById('alert-sound');

    // ตั้งค่าข้อมูล
    donorName.textContent = name || 'คุณไม่ระบุชื่อ';
    donationAmount.textContent = `${amount} บาท`;

    // เล่นเสียงแจ้งเตือน
    alertSound.currentTime = 0; // รีเซ็ตเสียงทุกครั้ง
    alertSound.play();

    // เล่นเสียงพูด (Text-to-Speech)
    const message = `${name || 'คุณไม่ระบุชื่อ'} ได้โอนเงินจำนวน ${amount} บาทผ่านทรูมันนี่วอลเล็ท`;
    speakText(message);

    // แสดงแจ้งเตือน
    alertContainer.style.display = 'block';

    // ซ่อนหลังจากแสดงผล
    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, 8000); // ซ่อนหลัง 8 วินาที
}

// ฟังก์ชันสำหรับ Text-to-Speech
function speakText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'th-TH'; // ภาษาไทย
    speech.volume = 1; // ระดับเสียง (0.0 ถึง 1.0)
    speech.rate = 1; // ความเร็ว (0.1 ถึง 10)
    speech.pitch = 1; // ระดับเสียงสูง/ต่ำ (0 ถึง 2)

    // เล่นเสียงพูด
    window.speechSynthesis.speak(speech);
}

// จำลองข้อมูลโดเนท (ไม่มีขั้นต่ำ)
setTimeout(() => {
    showDonationAlert('คุณสมชาย', '5'); // 5 บาท
}, 2000);

setTimeout(() => {
    showDonationAlert('คุณอ้อย', '1'); // 1 บาท
}, 10000);

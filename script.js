// script.js

const correctPassword = "Namnao2013"; // รหัสผ่านที่ต้องการ

// ฟังก์ชันสำหรับตรวจสอบรหัสผ่าน
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === correctPassword) {
        alert("รหัสผ่านถูกต้อง! คุณสามารถทดสอบการโอนเงินได้");
        // แสดงปุ่มโอนเงิน
        document.getElementById("donate-button").style.display = "inline-block";
        // ซ่อนฟอร์มรหัสผ่าน
        document.getElementById("password-form").style.display = "none";
    } else {
        alert("รหัสผ่านไม่ถูกต้อง! กรุณาลองใหม่อีกครั้ง.");
    }
}

// เมื่อกดปุ่ม "Test"
document.getElementById("test-button").addEventListener("click", function() {
    document.getElementById("password-form").style.display = "block"; // แสดงฟอร์มกรอกรหัสผ่าน
    document.getElementById("donate-button").style.display = "none"; // ซ่อนปุ่มโอนเงิน
});

// เมื่อกดปุ่มยืนยันรหัสผ่าน
document.getElementById("submit-password").addEventListener("click", checkPassword);

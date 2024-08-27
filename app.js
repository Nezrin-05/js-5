let userAge = prompt("Yaşınızı girin");

userAge = parseInt(userAge);

if (userAge >= 18) {
    console.log("Girişe izin verildi");
} else {
    console.log("Girişe izin verilmedi");
}


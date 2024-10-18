

//BASIT INDIRIM HESAPLAMA

let fiyat = prompt('Urunun fiyati ?');
let indirimYuzdesi = prompt('İndirim yuzdesi ?:');
console.log(("İndirimli fiyat: ") + (fiyat - (fiyat * (indirimYuzdesi / 100))));






//VIZE & FINAL NOTU HESAPLAMA

let vizeNotu = Number(prompt('Vize notunu girin:'));
let finalNotu = Number(prompt('Final notunu girin:'));
let ortalama = (vizeNotu * 0.4) + (finalNotu * 0.6);

console.log(ortalama > 50 ? "Gectiniz" : ortalama > 40 ? "Sartli gectiniz" : "Kaldiniz");
console.log("Donem ortalamaniz: " + ortalama);







//HAFTANIN GUNU

let day = Number(prompt("1-7 arasi bir sayi girin:"));
// switch arastirabilirsiniz diye not gordugum icin switch arastirip kodladim
switch (day) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break; 
}






//BUYUK SAYIYI BULMA

let sayi1 = Number(prompt("Birinci sayiyi girin:"));
let sayi2 = Number(prompt("İkinci sayiyi girin:"));
let sayi3 = Number(prompt("Ucuncu sayiyi girin:"));

let enBuyukSayi = 0; 
enBuyukSayi = (sayi2 > enBuyukSayi) * sayi2 + (sayi2 <= enBuyukSayi) * enBuyukSayi;
enBuyukSayi = (sayi3 > enBuyukSayi) * sayi3 + (sayi3 <= enBuyukSayi) * enBuyukSayi;

console.log("En buyuk sayi: " + enBuyukSayi);







//SANIYEYI SAATE CEVIRME

let toplamSaniye = Number(prompt("Saniye degerini girin:"));

let saat = (toplamSaniye / 3600);
let kalanSaniye = toplamSaniye % 3600;
let dakika = (kalanSaniye / 60);
let saniye = kalanSaniye % 60;

console.log(toplamSaniye + " saniye, " + saat + " saat, " + dakika + " dakika ve " + saniye + " saniyeye esittir.");









//GUNCEL YAS HESAPLAMA


let dogumYili = Number(prompt("Dogum yilinizi girin:"));
let dogumAyi = Number(prompt("Dogum ayinizi girin:"));
let dogumGunu = Number(prompt("Dogum gununuzu girin:"));

let mevcutYil = Number(prompt("Mevcut yilinizi girin:"));
let mevcutAy = Number(prompt("Mevcut ayinizi girin:"));
let mevcutGun = Number(prompt("Mevcut gununuzu girin:"));

let yasYil = mevcutYil - dogumYili;
let yasAy = mevcutAy - dogumAyi;
let yasGun = mevcutGun - dogumGunu;

console.log("Yasiniz: " + yasYil + " yil, " + yasAy + " ay ve " + yasGun + " gundur.");








//SAATLIK UCRET HESAPLAMA

let calisilanSaat = Number(prompt("Calistiginiz saat sayisini giriniz :"));
let saatlikUcret = Number(prompt("Saatlik ucretinizi giriniz :"));
let toplamKazanc = calisilanSaat * saatlikUcret;

console.log("Toplam kazancınız: " + toplamKazanc + " TL");







//AYLIK TAKSIT HESAPLAMA


let krediMiktari = Number(prompt("Kredi miktarini giriniz:"));
let taksitSayisi = Number(prompt("Taksit sayisini giriniz:"));

let aylikTaksit = krediMiktari / taksitSayisi;

console.log("Aylik taksitiniz: " + aylikTaksit);






//KULLANICI ADI & SIFRE KONTROLU

let kullaniciAdi = prompt('Kullanici adini giriniz')
let sifre = prompt('Sifrenizi giriniz')

if (kullaniciAdi === "admin" && sifre === "1234") {
    console.log("Giris basarili.");
} else {
    console.log("Kullanici adi veya sifre hatali.");
}





//NET KAR HESAPLAMA

let satisBedeli = Number(prompt("Satıs bedelini girin:"));
let maliyet = Number(prompt("Maliyeti girin (0 girebilir):"));
let kdvOrani = 0.20; 
let gelirVergisiOrani = 0.25; 
//kdv dahil toplam
let kdvTutari = satisBedeli * kdvOrani;
let toplamSatisBedeli = satisBedeli + kdvTutari; 

console.log("Toplam Satış Bedeli (KDV dahil): " + toplamSatisBedeli);



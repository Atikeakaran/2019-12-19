
/*var computer = Math.floor(Math.random() * 20) + 1;
console.log(computer);

var times = window.prompt("Kaç tahmin hakkınız olsun istersiniz : ");
times = parseInt(times);
for (var i = 1; i <= times; i++) {
    var tahmin;

    tahmin = window.prompt(`${i}. sayınızı giriniz :`);
    tahmin = parseInt(tahmin);

    if (tahmin === computer) {
        window.alert(`Tebrikler ${i}. hakkınızda bildiniz.`);
        break;
    } else if (tahmin < computer) {
        if (i === times) {
            window.alert(`Üzgünüz bilemediniz, tutulan sayı ${computer}`);
        } else {
            window.alert(`Sayınız küçük kaldı, lütfen sayınızı arttırınız.`);
        }

    }else{
        if (i === times) {
            window.alert(`Üzgünüz bilemediniz, tutulan sayı ${computer}`);
        } else {
            window.alert(`Sayınız büyük kaldı, lütfen sayınızı azaltınız.`);
        }
    }
}
*/


var x = "100";
var y = "10";

var z = x / y;
// bölme, çıkarma ve çarpma işlemlerinde direk 
//olarak datatype number oluyor

console.log(z);
console.log(typeof (z));
z = x * y;
console.log(z);
console.log(typeof (z));
z = x - y;
console.log(z);
console.log(typeof (z));
z = x + y;
console.log(z);
console.log(typeof (z));

//---------------------------------
//NAN : not number

var a = 100 / "apple";
console.log(a);
console.log(typeof (a));

// isNAN() sonucun number olup olmadığını kontrol eder.
console.log(isNaN(100 / "apple"));
console.log(isNaN(100 / "10"));
console.log(isNaN(100 / 10));


//---------------------------------
//Infınıty veya -ınfınıty: sınırsız
var k = 100 / 0;
console.log(k);
var k = -100 / 0;
console.log(k);

//---------------------------------
//.toString metodu number ı strişnge çevirir.
var m = 10;
m = m.toString();
console.log(m);
console.log(typeof (m));


//---------------------------------
//.toFixed() metodu ondalık sayılarda birgülden sonra kaç basamak yazdırmak istersek kullanıyoruz

var n = 10.57896;
n = n.toFixed(3);
console.log(n);
console.log(typeof (n));

//---------------------------------
//.toPrecision() toplamda kaç basamak sayı gösterilmek istenirse

var s = 10.57896;
s = s.toPrecision(5);
console.log(s);
console.log(typeof (s));

//---------------------------------
//number() :number a çeviriyor
//parseInt() tam sayı yapıyor
//ParseFloat() ondalık sayı yapıyor

var c = "100";
c = Number(c);

console.log(c);
console.log(typeof c);

var d = 10;
d = parseFloat(d);

console.log(d);
console.log(typeof d);

//UYGULAMALAR
//1. verilen sayının tersini ekrana yazdıran fonksiyon
// array metodu olan reverse() ü öğrenmek

// function reverseStr (str){
//     console.log(str);

//     var newStr = str.split('');
//     console.log(newStr);

//     newStr=newStr.reverse();
//     console.log(newStr);

//     newStr=newStr.join('');
//     console.log(newStr);   
// }
// reverseStr('Hamburg');

//-----------------------

function reverseStr2 (str){
    console.log(str);

    var NewStr2 = str.split('').reverse().join('');
    return NewStr2;
}
console.log(reverseStr2('Hamburg'));
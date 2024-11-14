//* ===========================================
//*                 (OBJECTS)
//* ===========================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin Object'leri kullanabiliriz.

//? Object'lerde Key_value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log(" ******** Objects ********* ");

//! 3 farkli yontem ile Object oluşturulabilir

//* -----------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* -----------------------------------------------

const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
console.log(car);

//? Objenin okunması (Read)

console.log(car.brand); //* . notasyonu ile erişim.
console.log(car.color[0]); //? pink

console.log(car.color);
car.color.forEach((c) => console.log(c));

console.log(car.Engine); //? undefined

//? Objenin degerinin degisitirilmesi (write)
car.speed = 7;
car.color = "Morcivert";
car.class = "E";

console.log(car);

//! Uncaught TypeError: Assignment to constant variable.
// car = {
//   deneme: "1",
// };

//* Square Bracket yontemi ile erisim
//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak
// obje erisimlerinde kullanılabilir

console.log("ENGINE:", car["engine"]); //? objeAdi["keyAdi"]

// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color, engine ... "
// );

// alert(car[myKey]);

//* ---------------------------------------------
//* 2- Object() class'indan new Operatoru ile
//* ---------------------------------------------

const myCar = new Object();
myCar.brand = "Mercedes";
myCar.model = 2022;
myCar.speed = 7;

console.log(myCar.speed);
console.log(myCar["model"]);

console.log(myCar);

//* ----------------------------------------------------------------
//* 3- object constructor'i kullanarak (00P ile ayrintilandirilacak)
//* ----------------------------------------------------------------

function Personel(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
  console.log(this);
}

const person1 = new Personel("1234567890", "Ahmet Can", 33, 30000);
const person2 = new Personel("123456745454", "Mehmet Veli", 23, 10000);

console.log(person1);
// //? ES6
// class Personel{
// constructor()
// }

//* ==============================================
//*                Object Metotlari
//* ==============================================

const personel = {
  name: "Ahmet",
  surname: "Canan",
  dob: 1990,
  salary: 30000,
  drivingLicense: true,
  calculateAge: function () {
    console.log(this); //? personel objesini refere eder.
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this); //? window objesini refere eder.
    return `${this.name} is ${this.calculateAge()} years old`;
  },
  //   summary: () => {
  //     console.log(this); //? window objesini refere eder.
  //     return `${this.name} is ${this.calculateAge()} years old`;
  //   },
};

console.log(personel.name + " " + personel.surname);

console.log(personel.calculateAge());

//! NOT: arrow fonksiyonlari özellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldırmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayısıyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log(personel.summary());

//*********************************************
//* JSON => Javascript Object Notation
//*********************************************

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];

console.log(team);
console.log(team[1]);
console.log(team[1].name); //? Mary
console.log(team[2].age); //? 20

console.log(" ************* ");

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));

//* Ornek2: age'leri bir artırarak yeni bir diziye saklayiniz.
const personelAges = team.map((person) => person.age + 1);
console.log(personelAges);

//* Örnek3: name ve surname'leri birleştirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

//? Alternative way
const teamFullName1 = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName);
console.log(teamFullName1);

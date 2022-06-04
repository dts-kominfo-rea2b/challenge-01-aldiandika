// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let FavColor1 = new Set();
FavColor1.add("Yellow");
FavColor1.add("Pink");
FavColor1.add("White");
FavColor1.add("Purple");

let FavColor2 = new Set();
FavColor2.add("Blue");
FavColor2.add("Black");
FavColor2.add("Grey");

let arrSchool1 = [
  {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016,
  },
  {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019,
  },
  {
    name: "SMA 03",
    city: "Tangerang"
  }
]

let arrSchool2 = [
  {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010,
  },
  {
    name: "SMP 03",
    city: "Jakarta",
    graduate: 2013,
  },
  {
    name: "SMA 01",
    city: "Tangerang"
  },
  {
    name:" Universitas Maju", 
    city: "Tangerang"
  }
]

let arrRes1 = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
let favRes1 = new Set();

for(let i=0; i < arrRes1.length; i++){
  favRes1.add(arrRes1[i]);
}

let arrRes2 = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];
let favRes2 = new Set();

for(let i=0; i < arrRes2.length; i++){
  favRes2.add(arrRes2[i]);
}

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: FavColor1,
  isHavePet: "Yes",
  education: arrSchool1,
  favoriteRestaurant: favRes1
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: FavColor2,
  isHavePet: "No",
  education: arrSchool2,
  favoriteRestaurant: favRes2
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
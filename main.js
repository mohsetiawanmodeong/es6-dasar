// ambil element
const cart_items = document.getElementById('cart');
const skills_items = document.getElementById('skills');
const data_items = document.getElementById('data');

// ES6
function addProduct(name, category) {
    return {
        name,
        category
    }
}

let getProduct = addProduct("iPhone 13", "Gadget");
cart_items.innerHTML = `Product: ${getProduct.name}, Category: ${getProduct.category}`;

// ambil element
const skills_holder = document.getElementById('skills');

// ES6
const yourSkills = ['Network Admin', 'Web Developer', 'System Admin', 'Programmer'];

// let parent = '<ul>';

// yourSkills.forEach(skill => {
//     parent += '<li>' + skill + '</li>';
//     console.log(`${skill}`);
// });

// parent += '</ul>';
// skills_holder.innerHTML = parent;

// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });

// const printSkills = yourSkills.map(skill => {
//     return skill;
// })

// skills_holder.innerHTML = printSkills;

// filter data
const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Web Developer";
});

skills_holder.innerHTML = myPrimarySkill;

// modul member kelas
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.nama_kelas);
    }

    hitungMember() {
        console.log('Tersedia 100 member');
    }
}

// let tambahSiswa = new Siswa('wawanaja', '123456', 'Web Design');
// tambahSiswa.gabung();

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi ' + this.username + ' telah berlangganan paket ' + this.paket);
    }
}

let tambahLangganan = new Langganan('wawanaja', 'Premium');
tambahLangganan.gabungPaket();
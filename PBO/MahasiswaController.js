import { Mahasiswa } from './Mahasiswa.js';
import { MahasiswaView } from './MahasiswaView.js'; // Pastikan ini benar

class MahasiswaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanMahasiswa() {
        const mahasiswa = new this.model("Budi", "123456", 85);
        document.getElementById("output").innerHTML = this.view.render(mahasiswa);
    }

    ubahNilai(nama, nim, nilaiBaru) {
        const mahasiswa = new this.model(nama, nim, 0);
        mahasiswa.setNilai(nilaiBaru);
        console.log(`${nama} memiliki nilai baru: ${mahasiswa.getNilai()}`);
    }
}

const mahasiswaController = new MahasiswaController(Mahasiswa, new MahasiswaView());
mahasiswaController.tampilkanMahasiswa();
mahasiswaController.ubahNilai("Budi", "123456", 95);

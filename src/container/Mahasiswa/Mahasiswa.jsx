import React, { Component } from "react";
import Mhs from "./PostMhs";
import './Mahasiswa.css';

class Mahasiswa extends Component {
    state = {               // komponen state dari React untuk statefull component
        listMahasiswa: [],     // variabel array yang digunakan untuk menyimpan data API
        insertMahasiswa: {    // variable yang digunakan untuk menampung sementara data yang akan di insert
            userId: 1,
            id: 1,
            NIM: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=asc') // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {    // komponen untuk mengecek ketika component telah di mount-ing maka panggil API
        this.ambilDataDariServerAPI()   // ambil data dari server API lokal
    }

    handleHapusMahasiswa = (data) => {        // fungsi yang meng-handle button action hapus data
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })     // alamat URL API yang ingin kita hapus datanya
            .then(res => {          // ketika proses hapus berhasil, maka ambil data dari server API lokal
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {      // fungsi untuk meng=handle form tambah data mahasiswa
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };      // clonning data state insertMahasiswa ke dalam variabel formInsertMahasiswa
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID mahasiswa)
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertMahasiswa sesuai dengan target yg diisi
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {           // fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',                     // method POST untuk input/insert data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)      // kirimkan ke body request untuk data mahasiswa yang akan ditambahkan (insert)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();                  // RELOAD / REFRESH DATA
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <h3 className="row justify-content-center">Tambah Data Mahasiswa</h3>
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label mb-2">NIM</label>
                        <div className="col-sm-4">
                            <textarea className="form-control" name="NIM" id="NIM" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label mb-2">Nama</label>
                        <div className="col-sm-4">
                            <textarea className="form-control" name="nama" id="nama" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label mb-3">Alamat</label>
                        <div className="col-sm-4">
                            <textarea className="form-control" name="alamat" id="alamat" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label mb-2">No Handphone</label>
                        <div className="col-sm-4">
                            <textarea className="form-control" name="hp" id="hp" rows="1" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label mb-2">Angkatan</label>
                        <div className="col-sm-4">
                            <select htmlFor="angkatan" className="form-control" name="angkatan" id="angkatan" onChange={this.handleTambahMahasiswa}>
                                <option>Pilih tahun angkatan</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label mb-2">Status</label>
                        <div className="col-sm-4">
                            <select htmlFor="angkatan" className="form-control" name="status" id="status" onChange={this.handleTambahMahasiswa}>
                                <option>Pilih status mahasiswa</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Lulus">Lulus</option>
                                <option value="Cuti">Cuti</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h3 className="row justify-content-center">List Data Mahasiswa</h3>
                {
                    this.state.listMahasiswa.map(mahasiswa => {     // looping dan masukkan untuk setiap data yang ada di listMahasiswa ke variabel mahasiswa
                        return <Mhs key={mahasiswa.id} nama={mahasiswa.nama} nim={mahasiswa.NIM} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa} />
                        // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default Mahasiswa;
import React from "react";

const Mhs = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="https://tse4.mm.bing.net/th?id=OIP.sG2AxSFtSrQ0oAFki5ozvgHaHa&pid=Api&P=0" alt="Gambar Mahasiswa" />
            </div>
            <div className="konten-mahasiswa">
                <div className="nama-mahasiswa">{props.nama}</div>
                <p className="nim-mahasiswa">NIM : {props.nim}</p>
                <p className="alamat-mahasiswa">Alamat : {props.alamat}</p>
                <p className="hp-mahasiswa">No Handphone : {props.hp}</p>
                <p className="angkatan-mahasiswa">Angkatan : {props.angkatan}</p>
                <p className="status-mahasiswa">Status : {props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus Mahasiswa</button>
            </div>
        </div>
    )
}

export default Mhs;
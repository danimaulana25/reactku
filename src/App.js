import React, { Component } from "react";
import Footer from "./container/Mahasiswa/Footer";
import Header from "./container/Mahasiswa/Header";
import Mahasiswa from "./container/Mahasiswa/Mahasiswa";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mahasiswa />
        <Footer />
      </div >
    );
  }
}
export default App;
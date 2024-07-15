// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import store Redux yang telah dibuat

import Home from "./Page/Home";
import Penanganan from "./Page/Penanganan";
import Data from "./Page/Data";
import Berita from "./Page/Berita";
import Cuaca from "./Page/RamalanCuaca";

import GempaBumi from "./Page/SubPenanganan/GempaBumi";
import Tsunami from "./Page/SubPenanganan/Tsunami";
import GunungMeletus from "./Page/SubPenanganan/GunungMeletus";
import Banjir from "./Page/SubPenanganan/Banjir";
import TanahLongsor from "./Page/SubPenanganan/TanahLongsor";
import AnginTopan from "./Page/SubPenanganan/AnginTopan";
import Kekeringan from "./Page/SubPenanganan/Kekeringan";
import KebakaranHutan from "./Page/SubPenanganan/KebakaranHutan";
import GelombangPanas from "./Page/SubPenanganan/GelombangPanas";
import BadaiPetir from "./Page/SubPenanganan/BadaiPetir";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/penanganan" element={<Penanganan />} />
          <Route path="/data" element={<Data />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/cuaca" element={<Cuaca />} />

          <Route path="/gempa-bumi" element={<GempaBumi />} />
          <Route path="/tsunami" element={<Tsunami />} />
          <Route path="/gunung-meletus" element={<GunungMeletus />} />
          <Route path="/banjir" element={<Banjir />} />
          <Route path="/tanah-longsor" element={<TanahLongsor />} />
          <Route path="/angin-topan" element={<AnginTopan />} />
          <Route path="/kekeringan" element={<Kekeringan />} />
          <Route path="/kebakaran-hutan" element={<KebakaranHutan />} />
          <Route path="/gelombang-panas" element={<GelombangPanas />} />
          <Route path="/badai-petir" element={<BadaiPetir />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

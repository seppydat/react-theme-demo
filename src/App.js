import React from 'react';

import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {

    return (
        <BrowserRouter basename={null}>
            <div>
                <Header />
                <div style={
                    { marginTop: '100px ', display: 'flex' }
                }>
                    <Navbar />
                    <Main />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

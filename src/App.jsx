import React from 'react';
import Card from './components/Card.jsx';
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-[#333] to-gray-800 p-6 min-h-screen text-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500"></div>
            <Card />
            <Footer />
        </div>
    );
};

export default App;
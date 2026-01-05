import React, {useEffect, useState} from 'react';
import CardData from './CardData.jsx'


const Card = () => {

    const [formData, setFormData] = useState({
        name:'',
        role:'',
        des:'',
        url:''
    });

    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
       const savedCards = localStorage.getItem("allCards");
       if(savedCards){
           setAllCards(JSON.parse(savedCards));
       }
    },[]);

    useEffect(() => {
        localStorage.setItem("allCards", JSON.stringify(allCards));
    },[allCards]);

    const changeHandler = (e)=> {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value,
        }));
    }
   const submitHandler = (e)=> {
        e.preventDefault();

        const newCard = {
            id: Date.now(),
            ...formData,
            createdAt: new Date().toLocaleString(),

        }
       setAllCards(prev => [...prev, newCard]);
       setFormData({
           name:'',
           role:'',
           des:'',
           url:''
       });
    }
    const removeCardHandler = (id)=> {
        setAllCards(prev => prev.filter(card => card.id !== id));
        }

    return (
        <div className="flex flex-col gap-8 items-center max-w-7xl mx-auto">
            <h1 className="text-center text-4xl md:text-5xl font-bold uppercase py-6">
                <span className="inline-block mr-3  animate-pulse">🪪</span>
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        User Card Generator
    </span>
            </h1>
            <div className="w-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <form onSubmit={submitHandler}
                  className="flex flex-col justify-start gap-6 w-full max-w-2xl text-white"
            >
                <input
                    onChange={changeHandler}
                    value={formData.name}
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    className="border border-gray-600 bg-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    maxLength={20}
                />

                <input
                    onChange={changeHandler}
                    value={formData.url}
                    name="url"
                    type="text"
                    placeholder="Paste profile image URL"
                    className="border border-gray-600 bg-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    maxLength={80}
                />

                <input
                    onChange={changeHandler}
                    value={formData.role}
                    name="role"
                    type="text"
                    placeholder="Job role / designation"
                    className="border border-gray-600 bg-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    maxLength={20}
                />

                <textarea
                    onChange={changeHandler}
                    value={formData.des}
                    name="des"
                    placeholder="Short description about user"
                    className="border border-gray-600 bg-gray-800 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    maxLength={200}
                />

                <button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 border-0 py-3 font-bold cursor-pointer hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-1/2 mx-auto rounded-full text-white shadow-lg"
                >
                    Create User Card
                </button>
            </form>
            </div>
            <div className="w-full p-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-300">
                    Created Cards ({allCards.length})
                </h2>
                <div className="w-full p-4 flex justify-center flex-wrap gap-4">
                    {
                        allCards.map(card => (
                          < CardData card={card} key={card.id} onRemove={removeCardHandler} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
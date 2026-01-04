import React from 'react';

const CardData = (props) => {

    return (

        <div
            className="bg-gradient-to-br from-[#F5F5DC] to-[#FFF8E7] text-[#006400] mx-2 my-3 p-6 gap-4 flex flex-col items-center justify-center border border-amber-200 flex-1 rounded-2xl min-w-[300px] max-w-[350px] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
            {/* Profile Image with glow effect */}
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full blur opacity-30"></div>
                <img
                    src={props.card.url}
                    alt={props.card.name}
                    className="rounded-full w-[10vw] h-[10vw] min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px] object-cover border-4 border-white relative z-10"
                />
            </div>

            <h2 className="font-bold text-2xl text-gray-800 mt-2">{props.card.name}</h2>
            <h3 className="font-semibold text-xl text-gray-700 bg-amber-100 px-4 py-1 rounded-full">
                {props.card.role}
            </h3>
            <p className="text-gray-600 text-center text-sm bg-white/50 p-3 rounded-lg w-full">
                "{props.card.des}"
            </p>

            <button
                onClick={() => props.onRemove(props.card.id)}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-6 font-semibold cursor-pointer hover:from-red-600 hover:to-pink-700 hover:scale-105 active:scale-95 transition-all w-2/3 text-center rounded-full shadow-md mt-2"
            >
                Remove Card
            </button>

        </div>
    );
};

export default CardData;
import React from 'react';

function Navbar() {
    return (
        <header className="h-24 flex items-center justify-center w-full"> 
            {/* <div className="w-12 h-12 bg-purple-800 rounded-full"></div> */}
            <nav className="bg-[linear-gradient(90deg,#04000A_0%,#1C072F_47%,#270454_100%)] h-14.5 w-11/12 rounded-full border border-purple-700 flex items-center pl-4 pr-1 text-white">
                <p className="text-2xl ml-8">Soso Kereselidze</p>
                <section className="ml-20 flex space-x-8">
                    <a href="#home" className="text-gray-400 text-lg relative after:content-[''] after:absolute after:bg-purple-700 after:h-0.5 after:w-0 after:left-0 after:-bottom-1.5 after:transition-all hover:text-white hover:after:w-full">Home</a>
                    <a href="#about" className="text-gray-400 text-lg relative after:content-[''] after:absolute after:bg-purple-700 after:h-0.5 after:w-0 after:left-0 after:-bottom-1.5 after:transition-all hover:text-white hover:after:w-full">About</a>
                    <a href="#skills" className="text-gray-400 text-lg relative after:content-[''] after:absolute after:bg-purple-700 after:h-0.5 after:w-0 after:left-0 after:-bottom-1.5 after:transition-all hover:text-white hover:after:w-full">Skills</a>
                    <a href="#contact" className="text-gray-400 text-lg relative after:content-[''] after:absolute after:bg-purple-700 after:h-0.5 after:w-0 after:left-0 after:-bottom-1.5 after:transition-all hover:text-white hover:after:w-full">Contact</a>
                </section>
                    <button className="ml-auto bg-purple-900 hover:bg-purple-800 text-white font-semibold text-lg w-36 h-12 rounded-full cursor-pointer">Contact me</button>
            
            </nav>
        </header>
    );
}

export default Navbar;

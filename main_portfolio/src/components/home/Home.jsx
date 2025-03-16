function Home() {
    return (
        <header id="home" className="w-[85%] h-[400px] mx-auto mt-12 flex relative">
            <div className="flex flex-col justify-between">
                <h1 className="font-['Exo_2'] text-[30px] font-normal text-gray-400 tracking-wide">
                    FRONT-END DEVELOPER
                </h1>
                <h1 className="text-white text-[60px] font-['Manrope'] mt-[-40px] leading-[60px]">
                    Soso <br /> Kereselidze
                </h1>
                <p className="text-gray-300 tracking-wide leading-6 font-['Roboto']">
                    I'm Soso Kereselidze, <br /> a 16-year-old full-stack developer <br /> with three years of experience. <br />
                    I'm currently studying at <br /> Goal-Oriented Academy, <br /> continuously enhancing my skills in <br />
                    web development and software engineering.
                </p>
            </div>
            <div>
                <img src="./src/components/images/profile_pic.jpg" className="h-[400px] absolute right-0 mr-[150px]" />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[300px] w-[50px] flex flex-col justify-around mr-8 items-center">
                <a href="https://www.facebook.com/profile.php?id=100075674090535" target="_blank">
                    <img src="./src/components/images/facebook.png"  className="w-10 transition-transform hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://discord.com/" target="_blank">
                    <img src="./src/components/images/discord.png" className="w-10 transition-transform hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/soso_kereselidze/" target="_blank">
                    <img src="./src/components/images/social.png" className="w-10 transition-transform hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/@sosokereselidze7247" target="_blank">
                    <img src="./src/components/images/youtube.png" className="w-10 transition-transform hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <img src="./src/components/images/whatsapp.png" className="w-10 transition-transform hover:scale-110 cursor-pointer" />
                </a>
            </div>
        </header>
    );
}

export default Home;

function About() {
    return (
        <section id="about" className="mt-[250px] w-[68%] mx-auto flex justify-center relative">
            <img src="./src/components/images/coding.jpg" className="w-[550px] rounded-full relative inline-block" />
            <img src="./src/components/images/water.png" className="absolute right-[980px] h-[150px] mt-[400px]" />
            <img src="./src/components/images/right-arrow.png" className="absolute ml-[900px] h-[150px]" />
            <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-[80px] leading-[60px] font-['Manrope']">
                About <br /> me
            </div>
            <div className="ml-[50px]">
                <p className="text-gray-300 font-['Roboto'] mt-[200px] leading-[30px] text-[20px]">
                My name is Soso Kereselidze, and I am a 16-year-old from Georgia. I developed a passion for programming at the age of 12 and have been continuously learning and improving my skills ever since. Currently, I am studying at a goal-oriented academy, where I receive guidance in setting clear objectives and achieving them effectively. This structured approach helps me stay focused, grow as a programmer, and work towards my aspirations in the field of technology.
                </p>
                <a href="#contact">
                    <button className="w-[140px] h-[50px] rounded-[30px] mt-[70px] ml-auto bg-purple-900 text-white text-[15px] font-semibold border-none hover:bg-purple-800 cursor-pointer">
                        Contact Me
                    </button>
                </a>
            </div>
        </section>
    );
}

export default About;

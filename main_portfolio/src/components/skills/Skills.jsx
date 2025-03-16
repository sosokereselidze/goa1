function Skills() {
    return (
        <section id="skills" className="w-3/5 mx-auto mt-64 flex flex-col items-center justify-center h-[500px]">
            <div className="flex items-center justify-evenly w-4/5 h-48">
                <h1 className="text-white text-[130px] font-semibold">My Skills</h1>
                <img src="./src/components/images/arrow.png" className="h-36 w-48" alt="Arrow" />
            </div>
            <div className="flex justify-between w-full mt-12">
                <section className="w-[45%] h-64 flex flex-col justify-around">
                    {['HTML', 'CSS', 'JS', 'PYTHON'].map((skill, index) => (
                        <div key={index} className="flex justify-between">
                            <p className="text-white text-lg tracking-wide font-semibold">{skill}</p>
                            <div className="w-[400px] h-7 bg-gray-900 rounded-full flex items-center">
                                <div className="w-[350px] h-6 ml-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center">
                                    <div className="w-5 h-5 bg-white rounded-full ml-[328px]"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="w-[45%] h-64 flex flex-col justify-around">
                    {['REACT', 'NODE.JS', 'TAILWIND', 'UI/UX'].map((skill, index) => (
                        <div key={index} className="flex justify-between">
                            <p className="text-white text-lg tracking-wide font-semibold">{skill}</p>
                            <div className="w-[400px] h-7 bg-gray-900 rounded-full flex items-center">
                                <div className="w-[350px] h-6 ml-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center">
                                    <div className="w-5 h-5 bg-white rounded-full ml-[328px]"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default Skills;
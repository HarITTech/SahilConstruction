import HeroBg from "../assets/Hero_bg.png";

const Hero = () => {
    return (
        <section
            className="relative flex-col pt-[130px] text-white bg-transparent bg-cover bg-center lg:-mb-[80px] "
        // style={{
        //     // backgroundImage: `url(${HeroBg})`,
        //     // backgroundSize: "cover",
        //     // backgroundPosition: "center",
        //     // minHeight: "100vh",
        //     // backgroundImage: `linear-gradient(to bottom, #18578c, #FDFEFF)`,
        // }}
        >
            <div
                className="absolute inset-0 lg:hidden sm:block md:block"
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "80vh",
                    // maxHeight: "100vh",
                }}
            />
            {/* Only apply HeroBg on tablet & up */}
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    maxHeight: "100vh",
                }}
            />


            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] lg:mb-[79px]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-screen-2xl w-screen mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-start justify-around">

                {/* Left Section */}
                <div className="max-w-lg">
                    <h1 className="text-5xl lg:text-8xl font-serif-display leading-tight">
                        The <br /><span className="text-golden-yellow italic">Perfect</span> <br />
                        Home
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                        Is waiting for you
                    </p>
                    <button className="mt-6 px-6 py-3 bg-golden-yellow text-navy-blue font-semibold rounded-md hover:bg-yellow-500 transition">
                        Know How →
                    </button>
                </div>

                {/* Right Section (Example floating card / box) */}
                <div className=" bg-gradient-to-b from-[#FDFEFF] to-[#65a0c240] text-navy-blue backdrop-blur-sm rounded-2xl drop-shadow-lg p-8 mt-12 md:mt-0 md:max-w-lg lg:max-w-2xl">
                    <div className="flex gap-2 pb-4 text-[#021E32]">
                        <span className="text-sm bg-[#CFEBFB] rounded-lg px-[10px] py-[2px] drop-shadow-md">Build</span>
                        <span className="text-sm bg-[#CFEBFB] rounded-lg px-[10px] py-[2px] drop-shadow-md">Construct</span>
                        <span className="text-sm bg-[#CFEBFB] rounded-lg px-[10px] py-[2px] drop-shadow-md">Renovate</span></div>
                    <h2 className="text-[40px] lg:text-[46px] text-[#043152] font-bold">Unique Design & Highly Engineered</h2>
                    <p className="text-[#043152] text-[25px] mt-2">For your betterment</p>
                    <div className="mt-6 flex items-center justify-between">
                        <button className="bg-golden-yellow text-navy-blue px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                            Explore →
                        </button>
                    </div>
                </div>
            </div>


            <div className="mx-auto flex flex-col md:flex-row gap-8 py-6 z-50">

                {/* Left Feature Cards */}
                <div className="flex flex-col md:w-2/5 mr-8 bg-[#CFEBFB] drop-shadow-md border-[2px] border-[#CFEBFB] rounded-e-3xl gap-[2px] max-w-[552px]">
                    {/* Card 1 */}
                    <div
                        className="relative rounded-tr-3xl overflow-hidden h-[170px] flex items-center"
                        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/75"></div>
                        <div className="relative z-10 px-6">
                            <h3 className="text-lg font-bold">Innovation in Every Brick</h3>
                            <p className="text-sm text-gray-200">
                                Work with experience workers and authentic supplies
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="relative overflow-hidden h-[170px] flex items-center"
                        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/75"></div>
                        <div className="relative z-10 px-6">
                            <h3 className="text-lg font-bold">Crafted with Care, Built to Last</h3>
                            <p className="text-sm text-gray-200">
                                Work with experience workers and authentic supplies
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="relative rounded-br-3xl overflow-hidden h-[170px] flex items-center"
                        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/75"></div>
                        <div className="relative z-10 px-6">
                            <h3 className="text-lg font-bold">We use Better to Build Better</h3>
                            <p className="text-sm text-gray-200">
                                Work with experience workers and authentic supplies
                            </p>
                        </div>
                    </div>
                </div>


                <div className="relative md:w-3/5 z-10 h-full px-6 flex flex-col lg:pt-[25px]">
                    {/* Customers */}
                    <div className="z-10 flex flex-row gap-8 py-5 lg:py-0 items-center justify-around">
                        <div className="flex flex-col place-items-center px-4 py-9 lg:py-6">
                            <span className="flex">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="customer"
                                    className="w-10 h-10 rounded-full border-2 border-white -mr-[10px]"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="customer"
                                    className="w-10 h-10 rounded-full border-2 border-white mr-2"
                                />
                                <span className="text-3xl font-semibold font-serif-display italic ">50+ </span>
                            </span>
                            <span className="text-xl font-semibold font-serif-display italic ">Happy Customers</span>
                        </div>

                        {/* Glass Box */}
                        <div className="bg-white/10 backdrop-blur-sm lg:p-8 p-5 rounded-xl max-w-md">
                            <p className="text-[16px] lg:text-[20px] font-serif-display">
                                We care for your <span className="text-golden-yellow font-bold italic">Dreams</span> and <br />
                                help to <span className="text-sky-400 font-bold italic"> BUILD </span> your{" "}
                                <span className="text-golden-yellow font-bold italic">Dreams</span>.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-row-3 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[270px] lg:mt-11 py-5 lg:py-0 px-auto">
                        <div className="flex flex-col items-center justify-center w-[80%] min-w-[220px] lg:h-[160px] bg-[#003B66] py-4 px-6 rounded-xl text-white">
                            <span className="text-2xl lg:text-4xl font-semibold font-serif-display italic ">50+ </span>
                            <span className="text-lg lg:text-xl font-semibold font-serif-display italic ">Happy Customers</span>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[80%] min-w-[220px] lg:h-[160px] bg-[#003B66] py-4 px-6 rounded-xl text-white">
                            <span className="text-2xl lg:text-4xl font-semibold font-serif-display italic ">50+ </span>
                            <span className="text-lg lg:text-xl font-semibold font-serif-display italic ">Happy Customers</span>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[80%] min-w-[220px] lg:h-[160px] bg-[#003B66] py-4 px-6 rounded-xl text-white">
                            <span className="text-2xl lg:text-4xl font-semibold font-serif-display italic ">50+ </span>
                            <span className="text-lg lg:text-xl font-semibold font-serif-display italic ">Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

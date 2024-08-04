function HeroSection (){
    return <div>

    <div className=" sm:flex justify-between text-white sm:pt-[100px] px-[20px] sm:px-[80px]">
        <div className="sm:w-[600px] pt-[70px] ">
            <h1  className="font-bold text-[50px] sm:text-[60px]"> Platzi Fake Store API </h1>
            <p className="text-[20px] text-[#C1C3C8] font-semibold"> Your API for your e-commerce or shopping website prototype.
            </p>
            <button className="w-[150px] h-[60px] rounded-[50px] text-[20px] mt-[30px] mb-[30px] sm:mb-0 sm:mt-[20px] bg-[#B3C7FF] text-black font-semibold"> View Docs <i class="fa-solid fa-arrow-right "></i> </button>
        </div>
        <img src="https://fakeapi.platzi.com/_astro/banner.5e0ee8a6_JMozV.webp" alt="" />
    </div>
    <h1 className="text-white text-[30px] sm:text-[40px] font-bold mt-[20px] text-center sm:ml-[80px]"> Our Latest Products </h1>
    </div> 
}
export default HeroSection 
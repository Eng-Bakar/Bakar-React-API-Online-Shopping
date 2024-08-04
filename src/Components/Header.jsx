function Header (){
    return <div>
        <div className="bg-[#23262F] sm:flex sm:justify-between pt-[10px] w-full h-[80px] px-[10px] sm:px-[30px]">
            <div className="flex justify-start ">
                <img className="w-[50px] mt-[6px] h-[50px]" src="https://fakeapi.platzi.com/_astro/logo.aa139940.png" alt="" />
                <h1 className="text-[#B3C7FF] font-bold sm:mt-0 mt-[10px] text-[27px] sm:text-[40px] ml-[10px]  "> Bakar Fake Store API </h1>
            </div>
            <div className=" text-white hidden sm:flex justify-between mt-[10px]">
                <i class="fa-solid fa-magnifying-glass absolute right-10 mt-[10px]"></i>
                <input className="w-[300px] outline-none bg-[#17181C] border-2 px-[10px] rounded-[10px] border-white h-[40px]" type="text" placeholder="Search" />
            </div>
        </div>
    </div>
}
export default Header
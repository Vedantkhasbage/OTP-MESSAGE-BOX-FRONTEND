export const ButtonC=({dissabled,children})=>{
    return  <span className={`flex justify-center bg-green-200 h-[50px] w-[150px] font-semibold text-center items-center rounded-full text-center ${dissabled?"text-white":"text-black-700"}  ${dissabled ? "bg-gray-500" :"bg-blue-400"}`}>
        {children}
    </span>
}
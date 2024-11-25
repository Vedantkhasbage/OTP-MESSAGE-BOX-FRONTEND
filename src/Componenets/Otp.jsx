import { useRef, useState } from "react"
import { ButtonC } from "./ButtonC";
export const Otp =({number})=>{
    
     const ref=useRef(Array(number).fill(0));
      const [dissabled,setdissabled]=useState(true);
         
    //    const[val,setval]=useState(Array(number).fill(""));

     console.log(ref)
     console.log(number)
    return <div className='flex justify-center items-center	h-full'>
      {Array(number).fill(1).map((x,index)=>
        <OtpBoxes reference={e=>ref.current[index]=e} key={index} onDone={()=>{
            if(index==number-1) setdissabled(false)
            if(index+1>=number){
                 return;
            }
             ref.current[index+1].focus();
            //  setval(e.target.value);
        }} goBack={()=>{
            if(index==0) return;
            ref.current[index-1].focus();
        }} />
      )}
        <ButtonC dissabled={dissabled}>Sign In</ButtonC>
    </div>
}

function OtpBoxes({
    onDone,reference,goBack
}){
        const [inputvalue,setinputvalue]=useState("");
    return <input value={inputvalue} ref={reference} type="text" onChange={(e)=>{
        const val=e.target.value;
        const ascii=val.charCodeAt(0);
        if(ascii>=48 && ascii<=57) {
            setinputvalue(val);
            onDone();
        }
    }} onKeyUp={(e)=>{
        if(e.key=="Backspace") {
            e.target.value="";
            goBack();
        }
    }} className=" text-white outline-none h-[50px] w-[40px] bg-blue-500 px-2 m-1 rounded"/>
  
}
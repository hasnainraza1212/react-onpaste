import React, { useEffect, useRef, useState } from "react";
const Input = () => {
  const inputRef = useRef(null)
  const [text, setText] = useState("")
  const onPaste = (e)=>{
const data = e.clipboardData.getData("text")
setText(e=>e+data)
  }
  const onChange = (e)=>{
    const data = e.target.value
    setText(data)
      }

useEffect(()=>{
inputRef?.current?.focus()
},[])
useEffect(() => {
  const textarea = inputRef.current;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}, [text]);
useEffect(()=>{
console.log(text)
},[text])
  return (
    <div className="w-screen h-screen grid place-content-center">
    <textarea ref={inputRef} className="border-0 outline-none p-5 max-h-[300px]"  value={text} onChange={onChange} onPaste={onPaste}/>
    </div>
  );
};

export default Input;

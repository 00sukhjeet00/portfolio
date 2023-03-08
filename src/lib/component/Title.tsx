import React from "react";
interface title{
    title:string,
    num:string
}
export default function Title(props:title) {
  return (
    <div className="max-[500px]:text-base text-3xl text-gray-900 dark:text-white flex items-center mb-2 tracking-wide">
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 mr-2">
        {props.num}.
      </span>
      {props.title}<hr className="max-[500px]:hidden w-2/5 ml-2" style={{borderColor:"#334155"}}/>
    </div>
  );
}

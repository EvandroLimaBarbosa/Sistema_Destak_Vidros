import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  function seForTipoTime(){
    if (props.type === "time") {
      return (
      'p-6'
      )
  }else {
    return( 
    'p-2'
    )
  }
  }
  return (
    <input
      {...props}
      className={`bg-zinc-900 py-3 rounded  text-sm placeholder:text-zinc-500 ${seForTipoTime()}`}
    />
  );
}

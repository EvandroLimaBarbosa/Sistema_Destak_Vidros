import { ChangeEvent, useState } from "react";

interface InputProps {
  title: string;
  carac: number;
  direction: string;
  type: string;
}

export default function Input(props: InputProps) {
  const [num, setNum] = useState<string>('');

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = props.carac;
    if (props.type == 'number') {
      setNum(event.target.value.slice(0, limit).replace(/\D/g, ""));
    } else if (props.type == 'text') {
      setNum(event.target.value.slice(0, limit));
    }
  };

  return (
    <div
      className={`flex flex-${props.direction} w-full mx-0 my-5 gap-3 items-center`}
      id={`container_${props.title}`}
    >
      <label className="mx-auto font-inter font-bold text-base leading-5 text-gray-600" id={`label_${props.title}`}>{props.title.toUpperCase()}</label>
      <div>
        <input
          className={`py-3 border-black h-8 border rounded text-sm placeholder:text-zinc-500 px-2 shadow-[0px_3px_5px_#0000008a] leading-normal text-center w-full`}
          placeholder={`Digite a ${props.title.charAt(0).toUpperCase() + props.title.slice(1).toLowerCase()}`}
          type="text"
          id={`input_${props.title}`}
          min={0}
          value={num}
          onChange={handleNumChange}
        />
      </div>
    </div>
  );
}

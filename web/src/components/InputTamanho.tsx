import { useState, ChangeEvent } from "react";

interface InputTamanhoProps {
  title: string;
}

export default function InputTamanho(props: InputTamanhoProps): JSX.Element {
  const [num, setNum] = useState<string>('');

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = 6;
    setNum(event.target.value.slice(0, limit));
  };

  return (
    <div className="flex flex-col w-[136px] mx-0" id="container_tamanhos">
      <label className="mx-auto my-2 font-inter font-bold text-base leading-5 text-gray-600" id="label_tamanho">{props.title}</label>
      <input
        className="py-3 border-black h-8 border rounded text-sm placeholder:text-zinc-500 p-2 shadow-[0px_3px_5px_#0000008a] leading-normal text-center"
        placeholder={`Digite a ${props.title.charAt(0).toUpperCase() + props.title.slice(1).toLowerCase()}`}
        type="number"
        id="input_tamanho"
        min={0}
        value={num}
        onChange={handleNumChange}
      />
    </div>
  );
}

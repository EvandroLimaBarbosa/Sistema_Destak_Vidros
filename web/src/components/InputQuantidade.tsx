import { ChangeEvent, useState } from "react";

interface InputQuantidade {
  title: string;
}

export default function InputQuantidade() {
  const [num, setNum] = useState<string>('');

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = 3;
    setNum(event.target.value.slice(0, limit));
  };

  return (
    <div className="flex flex-row mx-0 my-5" id="container_tamanhos">
      <label className="mx-auto my-1 font-inter font-bold text-base leading-5 text-gray-600" id="label_tamanho">QUANTIDADE</label>
      <input
        className={`ml-2 py-3 w-[160px] border-black h-8 border rounded text-sm placeholder:text-zinc-500 p-2 shadow-[0px_3px_5px_#0000008a] leading-normal text-center`}
        placeholder={`Digite a Quantidade`}
        type="number" id="input_tamanho"
        min={0}
        value={num}
        onChange={handleNumChange}
      />
    </div>
  );
}

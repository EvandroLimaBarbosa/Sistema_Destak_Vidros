interface InputTamanhoProps {
title: string;
}

export default function InputTamanho(props : InputTamanhoProps) {
  return (
    <input
    className={`py-3 border-black h-8 border rounded text-sm placeholder:text-zinc-500 p-2 shadow-[3px_3px_5px_#0000008a]`}
    placeholder={`Digite a ${props.title}`}
    type="number"
  />
  )
}

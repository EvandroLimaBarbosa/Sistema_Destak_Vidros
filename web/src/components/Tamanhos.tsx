import InputTamanho from "./InputTamanho";

export default function Tamanhos() {
  return (
    <div className="flex w-full gap-2 my-2">
      <InputTamanho title="LARGURA"/>
      <InputTamanho title="ALTURA"/>
    </div>
  );
}

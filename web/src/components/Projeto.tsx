import ImagemProjeto from "./ImagemProjeto";
import InputQuantidade from "./InputQuantidade";
import SelectServico from "./SelectServico";
import Tamanhos from "./Tamanhos";

export default function Projeto() {
  return (
    <div
      className={`flex flex-col rounded-sm border-[0.01em] border-[#A4A4A4] m-[15px] p-[15px] pt-5 w-[310px]`}
    >
      <SelectServico/>
      <Tamanhos />
      <InputQuantidade/>
      <ImagemProjeto/>
    </div>
  );
}

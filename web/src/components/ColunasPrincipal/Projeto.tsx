import ImagemProjeto from "../Elementos/ImagemProjeto";
import Input from "../Elementos/Input";
import SelectServico from "../Elementos/SelectServico";

export default function Projeto() {
  return (
    <div
      className={`flex flex-col rounded-sm border-[0.01em] border-[#A4A4A4] m-[15px] p-[15px] max-w-[30%]`}
    >
      <SelectServico/>
      <div className="flex gap-3">
      <Input title="largura" carac={5} direction="col" type="number"/>
      <Input title="altura" carac={5} direction="col" type="number"/>
      </div>
      <Input title="quantidade" carac={3} direction="row" type="number"/>
      <ImagemProjeto/>
    </div>
  );
}

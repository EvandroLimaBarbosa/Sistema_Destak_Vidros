import ImagemProjeto from "../Elementos/ImagemProjeto";
import InputSelect from "../Elementos/InputSelect";
import SelectServico from "../Elementos/SelectServico";

export default function Projeto() {
  return (
    <div
      className={`flex flex-col rounded-sm border-[0.01em] border-[#A4A4A4] m-[15px] p-[15px] max-w-[50%]`}
    >
      <div className="flex gap-3">
      <InputSelect title="largura" carac={5} direction="col" type="select"/>
      <InputSelect title="altura" carac={5} direction="col" type="number"/>
      </div>
      <InputSelect title="quantidade" carac={3} direction="row" type="number"/>

      
    </div>
  );
}

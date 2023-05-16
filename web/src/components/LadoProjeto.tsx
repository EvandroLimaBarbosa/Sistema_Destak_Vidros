import InputTamanho from "./InputTamanho";

export default function LadoProjeto() {
  return (
    <div
      className={`flex flex-col rounded-sm border-[0.01em] border-[#A4A4A4] m-[15px] w-[310px] p-[15px] xl:w-96`}
    >
      <div className="mx-auto">Box até o teto</div>

      <div className={`flex flex-row`}>
        <div className="flex gap-2 flex-1">
          <div className="grid grid-cols-2 gap-x-2">
            <label className="m-auto">Largura</label>
            <label className="m-auto">Altura</label>
            
            <InputTamanho title="Largura"/>
            <InputTamanho title="Altura"/>
          </div>
        </div>
      </div>
    </div>
  );
}

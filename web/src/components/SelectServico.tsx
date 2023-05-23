
export default function SelectServico() {
  return (
    <select
      className="mx-auto font-inter font-bold text-xl leading-6
      w-full
      pl-5
      py-1.5
      text-black
      h-10
      bg-transparent
      outline-none
      border-none
      [&>option]:text-center "
      name="select_servicos"
      id="select_servicos"
    >
      {/* serviços aqui */}
      <option value="1">Box até o teto</option>
      <option value="2">Box padrão</option>
      <option value="2">Janela</option>
      <option value="2">Sacada</option>
      <option value="3">Porta</option>
    </select>
  )
}


export default function Select() {
  return (
    <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      h-10
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      
      [&>option]:text-center"
          name="services"
          id="idservices"
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

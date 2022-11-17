export default function FazerOrcamento() {
  console.log(`bg-black h-[${window.screen.height - 85}px] m-[15px]`);

  return (
    // container principal
    <div
      className={`flex rounded-sm border-[2px] border-[#A4A4A4] m-[15px] h-[650px]`}
    >
      {/* projeto aqui */}
      <div
        className={`flex rounded-sm border-[2px] border-[#A4A4A4] m-[15px] w-[310px] p-[15px] justify-center xl:w-96`}
      >
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          name="services"
          id="idservices"
        >
          {/* serviços aqui */}
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

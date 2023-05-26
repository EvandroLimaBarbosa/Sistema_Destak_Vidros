import Projeto from "../components/ColunasPrincipal/Projeto";
import Opcoes from "../components/ColunasPrincipal/Opcoes";

export default function FazerOrcamento() {
  console.log(`bg-black h-[${window.screen.height - 85}px] m-[15px]`);

  return (
    // container principal
    <div
      className={`flex rounded-sm border-[0.01em] border-[#A4A4A4] h-[650px]`}
    >
      {/* projeto aqui */}
      
       <Projeto/>
       <Opcoes/>
    </div>
  );
}

import { List as HamburgIcon} from "phosphor-react";
import { useState } from 'react';
import Sidebar from "../components/Sidebar";



export default function Header() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

  return (
    //  Conteiner de todo o menu
    <div className="mx-auto pr-6 flex flex-row items-center bg-[#20345F] text-white justify-between shadow-[0_5px_10px_4px_#0000008a]">

      {/* lado esquerdo do menu */}
      <div className="bg-[#172645] pl-6 h-[70px] w-[280px] flex items-center">

        {/* icone do menu */}
        <button>
        <HamburgIcon onClick={showSidebar} className="hover:text-[#787878]" size={40} weight="bold" />
        {sidebar && <Sidebar/>}
        </button>
      </div>

      {/* lado direito do menu */}
      <div>sda</div>
    </div>
  );
}

import { List as HamburgIcon } from "phosphor-react";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

import { X as CloseIcon } from "phosphor-react";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e: any) => {
    if (e.key === "Escape" && sidebar) {
      e.preventDefault()
      showSidebar();
    }
    

  };

  return (
    //  Conteiner de todo o menu
    <div className="mx-auto h-[70px] pr-6 flex flex-row items-center bg-[#20345F] text-white justify-between shadow-[0_5px_10px_4px_#0000008a]">
      {/* lado esquerdo do menu */}
      <div>
        <Sidebar
          icon={sidebar ? CloseIcon : HamburgIcon}
          activeAllScreen={sidebar}
          onClick={showSidebar}
        />
      </div>

      {/* lado direito do menu */}
      <div>Sair</div>
    </div>
  );
}

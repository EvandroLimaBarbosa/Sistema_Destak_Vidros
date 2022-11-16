import { List as HamburgIcon } from "phosphor-react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

import { X as CloseIcon } from "phosphor-react";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  console.log(sidebar);

  return (
    //  Conteiner de todo o menu
    <div className="mx-auto h-[70px] pr-6 flex flex-row items-center bg-[#20345F] text-white justify-between shadow-[0_5px_10px_4px_#0000008a]">
      {/* lado esquerdo do menu */}
      <div>
        {sidebar ? (
          <Sidebar
            icon={CloseIcon}
            activeAllScreen={sidebar}
            onClick={showSidebar}
          />
        ) : (
          <Sidebar
            icon={HamburgIcon}
            activeAllScreen={sidebar}
            onClick={showSidebar}
          />
        )}
      </div>

      {/* lado direito do menu */}
      <div>Sair</div>
    </div>
  );
}

import ItemsSidebar from "./ItemsSidebar";
import LogoDestak from "/public/Logo Transparente Branca 3.png";

interface SidebarProps {
  onClick: any;
  icon: any;
  activeAllScreen: boolean;
}

export default function Sidebar(props: SidebarProps) {
  return (
    //  container da sidebar
    <div
      className={`bg-[#172645] top-0 ${
        props.activeAllScreen ? "h-screen" : "h-[70px]"
      } left-0 w-[280px] absolute`}
    >
      {/* container do header */}
      <div
        className={`bg-[#172645] py-0 pl-6 h-[70px] w-[280px] flex items-center`}
      >
        {/* icone do X */}
        <button>
          <props.icon
            onClick={props.onClick}
            className="hover:text-[#787878]"
            size={40}
            weight="bold"
          />
        </button>
        <img className="m-auto" src={LogoDestak} />
      </div>

      {/* container dos links */}
      {props.activeAllScreen && (
        <div>
          <ItemsSidebar link="" value="Fazer Orçamento" />
          <ItemsSidebar link="fazerorcamento" value="Todos Orçamentos" />
          <ItemsSidebar link="" value="Controle de Estoque" />
          <ItemsSidebar link="" value="Saida estoque" />
          <ItemsSidebar link="" value="Clientes" />
          <ItemsSidebar link="" value="Produtos" />
          <ItemsSidebar link="" value="Serviços" />
          <ItemsSidebar link="" value="Notas Fiscais" />
          <ItemsSidebar link="" value="Agenda" />
          <ItemsSidebar link="" value="Relatorios" />
        </div>
      )}
    </div>
  );
}

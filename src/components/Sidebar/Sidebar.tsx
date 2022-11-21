import ItemsSidebar from "./ItemsSidebar";
import LogoDestak from "/Logo Transparente Branca 3.png";

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
        props.activeAllScreen ? "h-full" : "h-[70px]"
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
            className="hover:text-[#787878] transition ease-in hover:scale-110 duration-400
            "
            size={40}
            weight="bold"
          />
        </button>
        <img className="m-auto" src={LogoDestak} />
      </div>

      {/* container dos links */}
      {props.activeAllScreen && (
        <div className="">
          <ItemsSidebar onClick={props.onClick} link="fazerorcamento" value="Fazer Orçamento" />
          <ItemsSidebar onClick={props.onClick} link="todosorcamentos" value="Todos Orçamentos" />
          <ItemsSidebar onClick={props.onClick} link="controleestoque" value="Controle de Estoque" />
          <ItemsSidebar onClick={props.onClick} link="" value="Saida estoque" />
          <ItemsSidebar onClick={props.onClick} link="" value="Clientes" />
          <ItemsSidebar onClick={props.onClick} link="" value="Produtos" />
          <ItemsSidebar onClick={props.onClick} link="" value="Serviços" />
          <ItemsSidebar onClick={props.onClick} link="" value="Notas Fiscais" />
          <ItemsSidebar onClick={props.onClick} link="" value="Agenda" />
          <ItemsSidebar onClick={props.onClick} link="" value="Relatorios" />
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";

interface ItemsSidebarProps {
  value: string;
  link: string;
  onClick: any;
  
}

export default function ItemsSidebar(props : ItemsSidebarProps) {
  return (
    
    <Link onClick={props.onClick} className="h-[50px] hover:bg-[#20345F] flex hover:text-gray-400 text-lg pl-10 items-center transition ease-in-out hover:scale-105 duration-300" to={props.link}>
      {props.value}
      
    </Link>
  );
}

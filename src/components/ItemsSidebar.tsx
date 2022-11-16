import { Link } from "react-router-dom";

interface ItemsSidebarProps {
  value: string;
  link: string;
}

export default function ItemsSidebar(props : ItemsSidebarProps) {
  return (
    <Link to={props.link}>
    <a href={`/${props.link}`} className="h-[50px] hover:bg-[#20345F] flex hover:text-gray-400 text-lg pl-10 items-center">
      {props.value}
    </a>
    </Link>
  );
}

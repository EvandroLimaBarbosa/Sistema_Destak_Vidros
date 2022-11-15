interface ItemsSidebarProps {
  value: string;
  link: string;
}

export default function ItemsSidebar(props : ItemsSidebarProps) {
  return (
    <a href={`/${props.link}`} className="h-[60px] hover:bg-[#20345F] flex hover:text-gray-400 text-2xl pl-10 items-center">
      {props.value}
    </a>
  );
}

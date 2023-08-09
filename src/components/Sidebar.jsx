import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faVial, faComment, faCaretDown, faTableList } from "@fortawesome/free-solid-svg-icons";

function SidebarItem( props ) {
    return (
        <div className="p-2 shadow-md shadow-black bg-zinc-900 text-white rounded
                        hover:bg-zinc-950 hover:cursor-pointer transition
                        flex justify-between items-center">
            <a href={'#'+props.name} className="">{props.name}</a>
            <FontAwesomeIcon icon={props.icon}/>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="flex flex-col w-1/4 gap-4">
            <div className="px-2 py-4 shadow-md shadow-black bg-white text-black rounded
                            flex justify-between items-center">
                <h1 className="text-2xl font-bold">Contents</h1>
                <FontAwesomeIcon icon={faTableList} className="text-2xl" />
            </div>
            <SidebarItem name="Introduction" icon={faHouse} />
            <SidebarItem name="Tests" icon={faVial} />
            <SidebarItem name="Comments" icon={faComment} />
            <SidebarItem name="Chapter 1" icon={faCaretDown} />
            <SidebarItem name="Chapter 2" icon={faCaretDown} />
            <SidebarItem name="Chapter 3" icon={faCaretDown} />
            <SidebarItem name="Chapter 4" icon={faCaretDown} />
            <SidebarItem name="Chapter 5" icon={faCaretDown} />
            <SidebarItem name="Chapter 6" icon={faCaretDown} />
            <SidebarItem name="Chapter 7" icon={faCaretDown} />
            <SidebarItem name="Chapter 8" icon={faCaretDown} />
            <SidebarItem name="Chapter 9" icon={faCaretDown} />
            <SidebarItem name="Chapter 10" icon={faCaretDown} />
        </div>
    );
}
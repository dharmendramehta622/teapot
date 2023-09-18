
import logo from '../assets/images/logo.png';
import search from '../assets/svg/search.svg';
import document from '../assets/svg/document.svg';
import star from '../assets/svg/star.svg';  
import Search from '../pages/Search';
import History from '../pages/History';
import Favourite from '../pages/Favourite';
import Documents from '../pages/Documents';
import Dashboard from '../pages/Dashboard';
import { useLocation } from 'react-router-dom';

const menus = [
    {
        "name": "Search",
        "icon": search,
        "route": '/search',
        "screen": Search,
    },
    {
        "name": "Report",
        "icon": document,
        "route": '/',
        "screen": Dashboard,
    },
    {
        "name": "Favourite",
        "icon": star,
        "route": '/favourite',
        "screen": Favourite,
    },
    {
        "name": "History",
        "icon": document,
        "route": '/history',
        "screen":History,
    },
    {
        "name": "Documents",
        "icon": document,
        "route": '/document',
        "screen":Documents
    },
];

const Sidebar = () => { 
    const location = useLocation(); 
    return (
        <div className="flex flex-col shadow-xl justify-between items-start w-full h-screen ">
            <div className='h-44  w-44 text-center ml-12' >
                <img src={logo} alt="nexuslogo" ></img>
            </div>
        <div className=" w-full">
                {menus.map((e, index) => {
             const active = e.route === location.pathname;
                return (
              <a href={e.route} key={index+1}> 
             <div className={`flex flex-row justify-start items-start p-4 mx-4 my-2 rounded-xl ${(active ? "bg-primary":"bg-black")}`} >
               <img className={active ? 'text-background mx-2':'text-font mx-2'} src={e.icon} alt={e.name}></img>
                <p className={active ?'text-background mx-2': 'text-white mx-2'} >{e.name}</p>   
              </div>
                </a>
                )
               })}
            </div>
            <div> 
            </div>
        </div>
            
    );
}

export default Sidebar;
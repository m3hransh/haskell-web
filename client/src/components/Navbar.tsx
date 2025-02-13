import { Link, useLocation } from "react-router-dom";
import hat from "../assets/images/hat.png"

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'block py-2 pr-4 pl-3 text-white bg-gray-700 rounded lg:bg-transparent lg:text-white lg:p-0 dark:text-white'
      : 'block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent';
  };
  const items = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/roles', text: 'Roles' },
    { path: '/features', text: 'Features' },
  ];
  return (
    <header>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-darkgray">

        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center gap-1">
            <img src={hat} alt="logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Mafia</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="/login" className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {items.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={getLinkClass(item.path)}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

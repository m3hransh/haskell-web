const Navbar: React.FC = () => {

  return (<nav className="bg-gray-800 text-white p-4">
    <ul className="flex justify-around">
      <li>
        <a href="#about" className="hover:text-gray-400">About Project</a>
      </li>
      <li>
        <a href="#play" className="text-yellow-300 hover:text-yellow-400">Play Game</a>
      </li>
      <li>
        <a href="#roles" className="hover:text-gray-400">Roles</a>
      </li>
      <li>
        <a href="#learn" className="hover:text-gray-400">Learn</a>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;

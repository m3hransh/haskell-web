
const Siderbar: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white p-4" id="sidebar">
        <h1 className="text-xl font-bold mb-4">Roles</h1>
        <div className="mb-4">
          <form id="search-form" role="search" className="mb-4">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              New
            </button>
          </form>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href={`/contacts/1`} className="text-blue-300 hover:text-white">Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`} className="text-blue-300 hover:text-white">Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className="flex-grow p-4">
        {/* Detail content goes here */}
      </div>
    </div>
  );
}

export default Siderbar;

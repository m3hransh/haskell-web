import React from "react";

const Developer: React.FC = () => {
  const developer = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="developer" className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="flex items-center justify-center p-4">
        <img
          key={developer.avatar}
          src={developer.avatar}
          alt={`${developer.first} ${developer.last}`}
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold">
          {developer.first || developer.last ? (
            <>
              {developer.first} {developer.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>

        {developer.twitter && (
          <p className="mt-2 text-blue-500">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${developer.twitter}`}
              className="hover:underline"
            >
              @{developer.twitter}
            </a>
          </p>
        )}

        {developer.notes && <p className="mt-4 text-gray-700">{developer.notes}</p>}

      </div>
    </div>
  );
};

export default Developer;

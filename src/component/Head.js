const Head = () => {
  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-md items-center">
      <div className="flex col-span-1">
        <img
          className="h-14"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburgger"
        />

        <img
          className="h-14  mx-2 "
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400   p-2 rounded-l-full "
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 bg-gray-300 p-2 rounded-r-full">🔍</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 "
          src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
          alt="userIcon"
        />
      </div>
    </div>
  );
};

export default Head;

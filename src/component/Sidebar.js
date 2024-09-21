import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.hamApp.isMenuOpen);
  // early return pattern
  // if(!isMenuOpen) return null

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
      <ul className="">
        <li className="font-normal">Home</li>
        <li className="font-normal">Shorts</li>
        <li className="font-normal">Video</li>
        <li className="font-normal">Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Movie</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Movie</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;

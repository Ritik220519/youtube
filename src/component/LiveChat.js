import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    let i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(18) + "👌🤣",
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-[350px] h-[500px] border border-black border border-b-white  bg-slate-100 rounded-lg overflow-x-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessages key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ritik",
              message: liveMessage,
            })
          );
        }}
        className="w-full ml-2 p-2 border border-black rounded-sm border-t-white"
      >
        <input
          className="w-44"
          type="text"
          placeholder="comment here"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-green-200 rounded-md">send</button>
        <button className="mx-2 px-2">❤️</button>
      </form>
    </>
  );
};

export default LiveChat;

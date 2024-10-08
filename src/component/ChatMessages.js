const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm bg-slate-50 p-2 ">
      <img
        className="rounded-3xl"
        src="https://yt4.ggpht.com/ytc/AIdro_ndtGCqv8GkxVkOUgUUrgxMJ79NmTAJGhdSHUUM4AH2_DjjKes=s32-c-k-c0x00ffffff-no-rj"
        alt="liveChatLogo"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;

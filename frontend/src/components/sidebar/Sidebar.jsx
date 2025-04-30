import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="flex items-center justify-between">
        <div className="flex justify-content: center ml-12 mt-3">
          <LogoutButton />
        </div>
        <div className="mt-2">
          <UserInfo />
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;

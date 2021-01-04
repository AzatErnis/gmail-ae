import React from "react";
import { Button } from "@material-ui/core";
import { Add, Inbox } from "@material-ui/icons";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add />}>
        compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} />
    </div>
  );
};

export default Sidebar;

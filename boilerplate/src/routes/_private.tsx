import { type FC, useState } from "react";
import { FaBook, FaCalendar, FaBars, FaTable } from "react-icons/fa";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { SidebarHeader } from "@/components/SidebarHeader";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import IconButton from "@/components/IconButton";

const Private: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar
        backgroundColor="#ffffff"
        collapsed={collapsed}
        rootStyles={{
          color: "#607489",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
        <Sidebar.Menu>
          <Sidebar.MenuItem component={<Link to="/" />} icon={<FaCalendar />}>
            Calendar
          </Sidebar.MenuItem>
          <Sidebar.MenuItem icon={<FaBook />}>Documentation</Sidebar.MenuItem>
          <Sidebar.MenuItem
            component={<Link to="/profile" />}
            icon={<FaTable />}
          >
            Table
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar>

      <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        <Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              padding: "6px",
            }}
          >
            <IconButton
              icon={<FaBars />}
              onClick={() => setCollapsed((prev) => !prev)}
              rootStyles={{
                color: "#607489",
              }}
            />
          </div>
        </Header>

        <main>
          <div style={{ padding: "16px 24px", color: "#44596e" }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_private")({
  component: Private,
});

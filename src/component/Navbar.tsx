"use client";

import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Drawer } from "antd";
import Link from "next/link";
import styles from "./Navbar.module.css";

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const menuItems = [
    { key: "1", label: <Link href="/">Home</Link> },
    { key: "2", label: <Link href="">About</Link> },
    { key: "3", label: <Link href="">Services</Link> },
    { key: "4", label: <Link href="/contact">Contact</Link> },
  ];

  return (
    <Header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">🚀 Exploring Antd</Link>
      </div>

      {/* Desktop Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        items={menuItems}
      />

      {/* Mobile Menu Button */}
      <Button className={styles.menuButton} onClick={showDrawer} type="text">
        <MenuOutlined />
      </Button>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={open}
        closeIcon={<CloseOutlined />}
      >
        <Menu mode="vertical" items={menuItems} />
      </Drawer>
    </Header>
  );
};

export default Navbar;

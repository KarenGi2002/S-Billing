import { Outlet, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: <NavLink to="/inventories">Inventories</NavLink>,
    key: 'inventories',
    icon: <span className="material-symbols-outlined">inventory</span>,
  },
  {
    label: <NavLink to="/clients">Clients</NavLink>,
    key: 'clients',
    icon: <span className="material-symbols-outlined">group</span>,
  },
  {
    label: <NavLink to="/login">Logout</NavLink>,
    key: 'login',
    icon: <span className="material-symbols-outlined">logout</span>,
    danger: true,
  },
];

export const Navbar = () => {
  const [current, setCurrent] = useState('inventories');
  const onClick = (e) => setCurrent(e.key);
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        theme="dark"
      />
      <Outlet />
    </>
  );
};

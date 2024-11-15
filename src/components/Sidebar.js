import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { MenuDatas } from './Datas'; // Assume you have a MenuDatas.js file where you store your menu items

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const currentPath = (path) => {
    const currentPath = window.location.pathname.split('/')[1];
    const pathToCompare = path.split('/')[1];
    return currentPath === pathToCompare ? path : null;
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <div className="sidebar-header">
        <h2 className="sidebar-title">AI Health Nexus</h2>
      </div>
      <div className="sidebar-links">
        {MenuDatas.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={toggleSidebar} // Close sidebar on link click
            className={`sidebar-item ${
              currentPath(item.path) === item.path ? 'active' : ''
            }`}
          >
            <item.icon className="sidebar-icon" />
            <span className="sidebar-text">{item.title}</span>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Header from './Header';

function Dashboard({ SidebarToggle, setSidebarToggle }) {
  return (
    <div
      className={`w-full transition-all duration-300 ${
        SidebarToggle ? "ml-0" : "ml-64"
      }`}
    >
      {/* Header Component */}
      <Header SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle} />

      {/* Main Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard</h1>
        <p className="text-gray-600">
          This is where your dashboard content will go. Use this area to display graphs,
          tables, and other widgets.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Fields, Reports, Settings, Vehicles, Account } from "./index";

function Page() {
  return (
    <div className="App-content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default Page;

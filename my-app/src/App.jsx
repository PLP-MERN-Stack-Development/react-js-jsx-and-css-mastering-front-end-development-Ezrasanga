// src/App.jsx
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import ApiData from "@/pages/ApiData";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}

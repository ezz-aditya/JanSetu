import { BrowserRouter, Routes, Route } from "react-router";
import Services from "./pages/Services";
import Documents from "./pages/Documents";
import Schemes from "./pages/Schemes";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Integration from "./pages/Integration";
import Applications from "./pages/Applications";
import Settings from "./pages/Settings";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Dashboard Area */}
        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/applications"
            element={<Applications />}
          />
          <Route
            path="/documents"
            element={<Documents />}
          />
          <Route
            path="/schemes"
            element={<Schemes />}
          />
          <Route
            path="/integration"
            element={<Integration />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}
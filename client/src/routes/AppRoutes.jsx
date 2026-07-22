import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import CrimeMap from "../pages/CrimeMap/CrimeMap";
import Analytics from "../pages/Analytics/Analytics";
import Network from "../pages/Network/Network";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/crime-map" element={<CrimeMap />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/network" element={<Network />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
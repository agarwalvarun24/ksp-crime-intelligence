import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout() {
    return (
        <div className="flex h-screen bg-slate-900 text-white">
            <Sidebar />

            <div className="flex flex-col flex-1">

                <Navbar />

                <main className="flex-1 overflow-auto p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default MainLayout;
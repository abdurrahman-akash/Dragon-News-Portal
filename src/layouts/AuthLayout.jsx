import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <header className="w-11/12 mx-auto py-4">
        {/* Navbar */}
          <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout;

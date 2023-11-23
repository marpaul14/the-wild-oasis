import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="bookings" element={<Bookings />} />
      </Routes>
      <Routes>
        <Route path="cabins" element={<Cabins />} />
      </Routes>
      <Routes>
        <Route path="users" element={<Users />} />
      </Routes>
      <Routes>
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Routes>
        <Route path="account" element={<Account />} />
      </Routes>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

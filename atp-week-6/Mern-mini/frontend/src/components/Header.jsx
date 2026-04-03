import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-end text-3xl p-7 bg-gray-400 text-white gap-6">
      <NavLink to="" className={({ isActive }) => (isActive ? "text-black bg-white rounded-2xl" : "")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-black bg-white rounded-2xl" : "")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-black bg-white rounded-2xl" : "")}>
        Employees
      </NavLink>
    </nav>
  );
}

export default Header;
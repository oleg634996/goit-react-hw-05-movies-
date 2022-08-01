import { NavLink, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="link ">
            Home
          </NavLink>
          <NavLink to="movies" className="link">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Navigation;

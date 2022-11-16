import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, path: '/', text: 'Rockets' },
    { id: 2, path: '/missions', text: 'Missions' },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
    },
  ];

  return (
    <nav
      style={{ backgroundColor: '#fff' }}
      className="mb-2 d-flex justify-content-between align-items-center container-fluid border-bottom"
    >
      <div style={{ width: '50%' }} className="nav-left-wrapper">
        <div className="fs-3">
          <NavLink className="link-item brand mx-auto" to="/">
            <img height="40" width="50" src="planet.png" alt="LOGO" /> Space
            Traveler's Hub
          </NavLink>
        </div>
      </div>
      <ul
        style={{ width: '50%' }}
        className="nav d-flex justify-content-around fs-6"
      >
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className={`link-item`} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

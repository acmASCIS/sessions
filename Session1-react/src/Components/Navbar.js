// problem with a tag and page reload and solution using Link

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>Session 1 App</h1>
//       <div className="links">
//         <a href="/">function Component</a>
//         <a
//           href="/class"
//           style={{
//             color: "white",
//             backgroundColor: "#f1356d",
//             borderRadius: "8px",
//           }}
//         >
//           Class Component
//         </a>
//       </div>
//     </nav>
//   );
// };
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavBarContainer>
      <h1>Session 1 App</h1>
      <LinksContainer>
        <Link to="/" style={LinkStyle}>
          function Component
        </Link>
        <Link to="/class" style={LinkStyle}>
          Class Component
        </Link>
      </LinksContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid;
`;

const LinksContainer = styled.div`
  margin-left: auto;
`;
const LinkStyle = {
  color: "white",
  backgroundColor: "#f1356d",
  borderRadius: "8px",
  padding: 10,
  margin: 10,
};

export default Navbar;

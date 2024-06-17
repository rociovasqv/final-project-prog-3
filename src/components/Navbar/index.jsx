import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UserContext } from "../../contexts";
import './styles.css';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await userService.logout();
      if(response.status === 200){
        setIsAuthenticated(false);
        navigate("/login");
      }
    } catch (error) {
      const errorResponse = error.response.data;
      console.log(errorResponse)
    }
  };

  return (
      <ul className="navbar">
        <li>
          <Button as={Link} to="/">Home</Button>
        </li>
        {isAuthenticated ? (
           <li>
           <Button type="button" className="btn btn-outline-light" onClick={handleLogout}>Logout</Button>
         </li>
        ) : (
        <li>
          <Button as={Link} to="/login" className="btn btn-outline-light">Login</Button>
        </li>
        )}
      </ul> 
  );
};

export default Navbar;
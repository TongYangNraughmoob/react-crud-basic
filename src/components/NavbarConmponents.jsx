import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function NavbarConmponents() {
  const [Language, setLanguage] = useState('English')

  const { t, i18n } = useTranslation()
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    if (lng === 'en') {
      setLanguage("English")
    } else {
      setLanguage("ພາສາລາວ")
    }

  }

  const navigate = useNavigate()

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        navigate('/')
      }
    });
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >

            <Nav.Link ><Link to='/create_user'>{t("home_menu")}</Link> </Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item  >{t("user_menu")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {t("add_user_menu")}
              </NavDropdown.Item>
              <NavDropdown.Item >Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  >
                <Button onClick={handleLogout} >Logout</Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {Language}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item style={{ background: 'none' }}> <Button  onClick={() => changeLanguage('en')}>English</Button> </Dropdown.Item>
              <Dropdown.Item style={{ background: 'none' }}> <Button  onClick={() => changeLanguage('lao')}>Laos</Button> </Dropdown.Item>
               
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarConmponents;

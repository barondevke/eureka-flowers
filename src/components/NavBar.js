import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import styled from 'styled-components';






const Header = () => {
    const StyledLink = styled(Link)`
  color: White;
  text-decoration: none;
  

 
  
  
`;





    return (
        <Navbar expand="lg">
            <Container>

                <Nav>
                    <Nav.Link ><StyledLink to={'/'} activeClassName='current' exact  >Home</StyledLink> </Nav.Link>
                    <Nav.Link><StyledLink to={'/Roses'} activeClassName="current" exact>Roses</StyledLink> </Nav.Link>
                    <Nav.Link><StyledLink to={'/Bouquets'} activeClassName="current" exact >Bouquets</StyledLink> </Nav.Link>
                    <Nav.Link><StyledLink to={'/about-us'} activeClassName="current" exact>About Us</StyledLink> </Nav.Link>




                </Nav>

            </Container>
        </Navbar>


    )
}

export default Header

import logo from '../../images/LogoBN.png';
import { Button, Nav, ImgLogo, InputSpace } from "./NavbarStyled";

export function Navbar() {


    return (
        <>
            <Nav>
                <InputSpace className="input-search-space">
                    <i class='bi bi-search'></i>
                    <input type="text" placeholder='Digite para pesquisar' />
                </InputSpace>

                <ImgLogo src={logo} alt='Logo noticias' />

                <Button>Entrar</Button>
            </Nav>
        </>
    )
}
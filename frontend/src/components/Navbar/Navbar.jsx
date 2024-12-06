import { Outlet, useNavigate, Link } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
import { Button, Nav, ImgLogo, InputSpace } from "./NavbarStyled";
import { useForm } from "react-hook-form";

export function Navbar() {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    function onSearch(data) {
        const { title } = data;
        console.log(data)
        navigate(`/search/${title}`);
        reset();
    }

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace className="input-search-space">
                        <button type="submit">
                            <i class='bi bi-search'></i>
                        </button>
                        <input {...register("title")}
                            type="text"
                            placeholder='Digite para pesquisar'
                        />
                    </InputSpace>
                </form>
                <Link to="/">
                    <ImgLogo src={logo} alt='Logo noticias' />
                </Link>

                <Button>Entrar</Button>
            </Nav>
            <Outlet />
        </>
    )
}
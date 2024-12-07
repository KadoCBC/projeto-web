import { Outlet, useNavigate, Link } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
import { Button, Nav, ImgLogo, InputSpace, ErrorSpan } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
    title: z
     .string()
     .nonempty({message: "A pesquisa está vazia"})
     .refine(value => !/^\s+$/.test(value), {message: "A pesquisa não aceita somente espaços"}), // nao aceita apenas espacos

});

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });
    const navigate = useNavigate();
    function onSearch(data) {
        const { title } = data;
        console.log(data)
        navigate(`/search/${title}`);
        reset();
    }

    function goAuth() {
        navigate("/auth");
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

                <Button onClick={goAuth}>Entrar</Button> {/* botao de login, funcao goAuth nova */}
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}  {/* se nao for nulo mostra a mensagem */}
            <Outlet />
        </>
    )
}
import { Outlet, useNavigate, Link } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
import { Nav, ImgLogo, InputSpace, ErrorSpan } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";

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

                <Link to="auth">
                <Button  type="button" text="Entrar" >Entrar</Button> {/* on click nao tava mais funcionando depois de criar o Component button, ai usei Link  e nao usei mais a goAuth*/}
                </Link>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}  {/* se nao for nulo mostra a mensagem */}
            <Outlet />
        </>
    )
}
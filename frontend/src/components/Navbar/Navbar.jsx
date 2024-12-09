import { Outlet, useNavigate, Link } from 'react-router-dom';
import logo from '../../images/LogoBN.png';
import { Nav, ImgLogo, InputSpace, ErrorSpan, UserLoggedSpace } from "./NavbarStyled";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchSchema } from "../../schemas/searchSchema";
import { userLogged } from '../../services/userService';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../../Context/userContext';




export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    function onSearch(data) {
        const { title } = data;
        console.log(data)
        navigate(`/search/${title}`);
        reset();
    }

    async function findUserLogged() {
        try{
            const response = await userLogged();
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function signout() {
        Cookies.remove("token");
        setUser(undefined)
        navigate("/");
    }

    useEffect(() => {
        if(Cookies.get("token")) findUserLogged();
        }, []);


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

                {user ? (
                    <UserLoggedSpace>
                        <Link to ="/profile" style={{textDecoration: 'None'}}>
                        <h2>{user.name}</h2>  
                        </Link>

                        <i className="bi bi-box-arrow-right" onClick={signout}></i>
                    </UserLoggedSpace>
                ) : (    //se tiver user logado mostra o user nao o botao, so da pra testar isso com o backend funcionando
                    <Link to="auth">
                <Button  type="button" text="Entrar" >Entrar</Button> {/* on click nao tava mais funcionando depois de criar o Component button, ai usei Link  e nao usei mais a goAuth*/}
                </Link>
                )}
  
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}  {/* se nao for nulo mostra a mensagem */}
            <Outlet />
        </>
    )
}
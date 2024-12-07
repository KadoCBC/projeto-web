import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";


export function Authentication() {

    const { 
        register: registerSignup, 
        handleSubmit: handleSubmitSignup, 
        formState: { errors: errorsSignup }
     } = useForm();

    const { 
        register: registerSignin, 
        handleSubmit: handleSubmitSignin, 
        formState: { errors: errorsSignin }
     } = useForm({resolver: zodResolver(signinSchema)});

    function inHandleSubmit(data) {
        console.log(data); }

    function upHandleSubmit(data) {
        console.log(data); }

     return (
        <AuthContainer>
            <Section type="signin"> {/* tipo de autenticacao */}
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={registerSignin}
                    />
                    {errorsSignin.email && <ErrorSpan> {errorsSignin.email.message} </ErrorSpan> }
                    <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    register={registerSignin}
                    />
                    {errorsSignin.password && <ErrorSpan> {errorsSignin.password.message} </ErrorSpan> }
                    <Button type="submit" text="Entrar"></Button>
                </form>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}> 
                    <Input 
                    type="text"
                    placeholder="Nome"
                    name="name"
                    register={registerSignup}
                    />
                    <Input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={registerSignup}
                    />
                    <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    register={registerSignup}
                    />
                    <Input
                    type="password"
                    placeholder="Confirmar senha"
                    name="password"
                    register={registerSignup}
                    />  
                    <Button type="submit" text="Cadastrar"></Button>
                </form>
            </Section>                
        </AuthContainer>
    );
}
import { AuthContainer, Section } from "./AuthenticationStyled";

export function Authentication() {
    return (
        <AuthContainer>
            <Section type="signin"> {/* tipo de autenticacao */}
                <h2>Entrar</h2>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
            </Section>                
        </AuthContainer>
    );
}
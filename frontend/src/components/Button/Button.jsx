import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text }) {
  return <ButtonSpace type={type}>{text}</ButtonSpace>; //recebe o tipo e o texto, o tipo pode ser submit, button, reset
}

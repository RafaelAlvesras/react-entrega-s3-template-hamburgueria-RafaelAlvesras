import cart from "../../assets/img/cart.svg"
import { StyledDiv, StyledDivCount } from "./ModalIcon.js"

export function ModalIcon({countCart, setIsOpen}) {


    return (
            <StyledDiv onClick={() => setIsOpen(true)}>
                <img src={cart} alt="carrinho de compras" />
                <StyledDivCount>
                    <span>{countCart}</span>
                </StyledDivCount> 
            </StyledDiv>
    )
}
import cart from "../../assets/img/cart.svg"
import { StyledDiv, StyledDivCount } from "./ModalIcon.js"

export function ModalIcon({countCart, setIsOpen}) {

    const openModal = () => {
        setTimeout(() => {
            setIsOpen(true)
            
        }, 900)
    }

    return (
            <StyledDiv onClick={openModal}>
                <img src={cart} alt="carrinho de compras" />
                <StyledDivCount>
                    <span>{countCart}</span>
                </StyledDivCount> 
            </StyledDiv>
    )
}
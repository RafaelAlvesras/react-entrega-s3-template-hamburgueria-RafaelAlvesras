import { Input } from "../Input/index.jsx"
import { StyledHeader, StyledDivHeader } from "./StyledHeader.js"
import { ModalIcon } from "../ModalIcon/index.jsx"
import logo from "../../assets/img/MaskGroup.png"

export function Header ({countCart, setIsOpen, setSearchInput}) {
    return (
        <StyledHeader>
            <nav>
                <StyledDivHeader>
                    <img src={logo} alt="Logo Burguer Kenzie" />
                    <ModalIcon  setIsOpen={setIsOpen} countCart={countCart}/> 
                </StyledDivHeader>
                <Input setSearchInput={setSearchInput}/>
            </nav>
        </StyledHeader>
    )
}
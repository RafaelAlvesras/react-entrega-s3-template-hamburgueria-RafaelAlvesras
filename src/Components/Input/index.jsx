import lupa from "../../assets/img/lupa.png"
import { StyledInput, StyledButton, StyledDivInput } from "./Input.js"

export function Input({setSearchInput}) {

    function handleChange(event) {
        setSearchInput(event.target.value)
    }

    return (
        <>
            <StyledDivInput>
                <StyledInput type="text" placeholder="Digitar Pesquisa" onChange={(event) => handleChange(event)}/>            
                <StyledButton>
                    <img src={lupa} alt="lupa" />
                </StyledButton>
            </StyledDivInput>
        </>
    )
}
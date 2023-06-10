import styled from "styled-components"

export const StyledDiv = styled.div`
    display: flex;
    position: relative;
    max-width: 3.25rem;
    max-height: 2.85rem;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }
`

export const StyledDivCount = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    width: 20px;
    max-height: 24px;
    right:-30%;
    top: -30%;

    font-style: normal;
    font-weight: 900;
    font-size: 0.875rem;
    
    background-color: #27AE60;
    border-radius: 7px;
`

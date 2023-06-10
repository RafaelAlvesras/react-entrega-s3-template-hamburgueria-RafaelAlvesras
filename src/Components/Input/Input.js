import styled from "styled-components"

export const StyledInput = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.625rem 0rem 0.9375rem;
    gap: 7.1875rem;
    width: 100%;
    max-width: 23.8125rem;
    height: 100%;
    
    background: #FFFFFF;
    border: 0.125rem solid var(--color-grey-100);
    border-radius: 0.5rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;

    ::placeholder{
        color: var(--color-grey-100);
    }

    :focus {
        border: 2px solid var(--color-grey-600);
    }

    :focus::placeholder {
        color: #828282;
    }
    `

export const StyledButton = styled.button`
    
    position: absolute;
    top: 15%;
    right: 3%;
    box-sizing: border-box;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 3.3125rem;
    height: 2.5rem;
    
    background: var(--color-color-primary);
    border: 0.125rem solid var(--color-color-primary);
    border-radius: 0.5rem;
    cursor: pointer;
`

export const StyledDivInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    width: 100%;
    max-width: 23.8125rem;
    height: 3.75rem;

    @media(min-width: 768px){
        width: 30%;
    }
`
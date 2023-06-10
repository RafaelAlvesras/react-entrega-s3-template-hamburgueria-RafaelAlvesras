import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    padding: 19px 16px 20px 16px;
    width: 100%;
    height: 9.5rem;
    background: #F5F5F5;

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 9.5rem;
    }

    @media(min-width: 768px){
        nav {
            flex-direction: row;
            max-width: 980px;
            gap: 1rem;
        }
    }
`

export const StyledDivHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media(min-width: 768px){
        width: 70%;
    }
`
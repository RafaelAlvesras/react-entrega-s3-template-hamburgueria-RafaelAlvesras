import styled from "styled-components"

export const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 25rem;
    flex-wrap: nowrap;
    overflow: auto;
    gap: 1.25rem;

    @media(min-width: 48rem) {
        justify-content: center;
        max-width: 1000px;
        height: 100%;
        flex-wrap: wrap;
        overflow: none;
        padding-left: 2rem;
        margin-bottom: 1rem;
    }
`
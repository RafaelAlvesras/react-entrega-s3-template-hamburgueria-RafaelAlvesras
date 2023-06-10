import styled from "styled-components"

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 300px;
    flex-shrink: 0;
    flex-basis: 300px;
    height: 346px;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    
    button {
        box-sizing: border-box;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.25rem;
        gap: 0.625rem;

        width: 6.625rem;
        height: 2.5rem;

        background: #BDBDBD;

        border: 0.125rem solid #BDBDBD;
        border-radius: 0.5rem;

        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.0625rem;

        color: #FFFFFF;
    }

    :hover {
        border: 2px solid #27AE60;
        border-radius: 5px;

        button {
        background: #27AE60;
        border: 0.125rem solid #27AE60;
        }

        button:hover {
            background: #93D7AF;
            border: 2px solid #93D7AF;
            border-radius: 8px;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 50%;
        padding: 10px 19px;
    }

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: var(--color-grey-600);
    }

    .category {
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
        color: var(--color-grey-300);
    }

    .price {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-color-primary);
    }

    .divImg{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50%;
        background: #F5F5F5;
    }

    img {
        width: 9.875rem;
        height: 9.875rem;
        background: #F5F5F5;
    }
`
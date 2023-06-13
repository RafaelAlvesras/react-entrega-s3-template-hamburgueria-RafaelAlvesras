import styled  from "styled-components"

export const StyledCard = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5.25rem;
    gap: 0.3rem;

    .productImg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.1413rem;
        height: 5rem;
        background: #E0E0E0;
        border-radius: 5px;
    }

    .namePriceDiv {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem;
        width: 100%;
        height: 100%;
    }

    .namePriceDiv > h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: #333333;
    }

    .namePriceDiv > p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: #27AE60;
    }

    .trashButton {
        border: none;
        background: none;
    }
` 
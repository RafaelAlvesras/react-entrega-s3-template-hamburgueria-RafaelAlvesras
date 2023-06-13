import styled from "styled-components"

export const StyledModal = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    align-items: flex-start;
    justify-content: center;

    .modal {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0;

        width: 29.25rem;
        height: 27.6875rem;

        background: white;

        border: 1px solid #F5F5F5;
        border-radius: 0px 0px 5px 5px;
    }

    .noProducts {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.8125rem 1.375rem;
        gap: 0.625rem;

        width: 100%;
        height: 3.375rem;

        background: #27AE60;
        border-radius: 0.3125rem 0.3125rem 0rem 0rem;

        color: white;
    }

    .buttonClose {
        display: flex;
        width: 10.87px;
        height: 12.87px;
        background-color: transparent ;
        color: rgba(255, 255, 255, 0.5);
        border: none;
    }

    
    .divCartList{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 15.75rem;  
    }
    
    .listCartSection{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        max-height: 15.75rem;
        padding: 1.125rem 1.5rem;
        gap: 1.5rem;
        overflow: auto;
    }
    
    .totalDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 7.5625rem;
        border-top: 1px solid #E0E0E0 ;
    }

    .removeAll {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0rem 1.25rem;
        gap: 0.625rem;
        height: 3.75rem;
        background: #E0E0E0;

        border: 0.125rem solid #E0E0E0;
        border-radius: 0.5rem;

        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #828282;
    }

    .removeAll:hover {
        border: 2px solid #27AE60;
        background-color: #27AE60;
        color: #F5F5F5;
    }

    .divTotalPriceModal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .totalTitle {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #333333;
    }

    .totalPrice {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #828282;
    }
`
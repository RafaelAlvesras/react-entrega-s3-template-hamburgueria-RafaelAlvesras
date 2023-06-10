import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
     *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
     }

     button {
        cursor: pointer;
     }

     ul,ol {
        list-style: none;
     }

    body {
      position: relative;
        font-family: 'Inter', sans-serif;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
   }
`
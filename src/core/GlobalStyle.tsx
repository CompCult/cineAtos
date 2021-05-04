import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    height: 100%;
    margin-bottom: 15px;
    color: #6D6D6D;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, #58AFFF 5.21%, #0060B8 72.4%) no-repeat;
    min-height: 97.7vh; 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .MuiInputBase-formControl {
    background: #FFFFFF;
  }

  .Mui-focused, .MuiOutlinedInput-root fieldset {
    color: black !important;
    border-color: #5a5a5a !important;
  }

  .MuiFormControl-root:hover fieldset { 
    border-color: white !important; 
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline  {
    border-color: #5a5a5a !important;
  }
  
  .recharts-tooltip-cursor {
    fill: rgba(0,0,0,0)
  }

  line, .recharts-text {
    stroke: #FFFFFF;
  }

  .gm-style .gm-style-iw-c {
    padding: 0 !important;
    transition: 0.2s ease-in;
    @media (max-width: 600px) { 
      transition: 0.2s ease-in;
      max-width: 350px !important;
    }

    @media (max-width: 400px) { 
      transition: 0.2s ease-in;
      max-width: 280px !important;
    }
  }

  div.gm-style-iw-c button {
    background-color: #ffffff !important;
    margin-right: 5px !important;
    margin-top: 5px !important; 
  }

  .gmnoprint .gm-style-mtc div {
    background-color: rgb(88, 175, 255)  !important;
    color: #ffffff !important;
    width: 100px !important;
  }

  .gm-style button,.gm-svpc {
    background-color: rgba(88, 175, 255)  !important;
    color: #ffffff !important;
  }
  .MuiTypography-colorTextSecondary  {
    color: #0060B8 !important;
  }
`;
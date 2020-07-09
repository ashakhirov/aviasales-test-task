import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    /* common */
    --primary-font: 'Open Sans', Tahoma, 'sans-serif';
    --primary-text-color: var(--black);
    --secondary-text-color: var(--gray);
    --bg-color: var(--mercury);

    /* colors */
    --black: #000;
    --gray: #a0b0b9;
    --white: #fff;
    --blue: #2196f3;
    --mercury: #e5e5e5;

    /* button */
    --button-border: 1px solid #dfe5ec;
    --button-height: 1rem;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: var(--primary-font);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.7;
    color: var(--text-color);
    background: var(--bg-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`

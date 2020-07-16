import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    /* common */
    --primary-font: 'Open Sans', Tahoma, 'sans-serif';
    --primary-text-color: var(--black);
    --secondary-text-color: var(--gray);
    --bg-color: var(--catskill);
    --border-radius: 6px;

    /* colors */
    --black: #4a4a4a;
    --gray: #a0b0b9;
    --white: #fff;
    --blue: #2196f3;
    --catskill: #f3f7fa;
    --progress: #d95c5c;

    /* button */
    --button-border: 1px solid #dfe5ec;
    --button-border-active: 1px solid var(--blue);
    --button-border-radius: 5px;
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
    color: var(--primary-text-color);
    background-color: var(--bg-color);
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

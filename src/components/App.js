import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalCSS,Button,H1} from "../Styles.js";
import DiscordTemplate from "./DiscordTemplate/DiscordTemplate.js";


const App = () => {

  const [theme, setTheme] = useState({mode:"dark"});
  const changeTheme = () => theme.mode === "dark" ? setTheme({mode:"light"}) : setTheme({mode:"dark"});


  return (
    <ThemeProvider theme={theme}>
        <nav><Button onClick={changeTheme}>Theme <span>🙌</span></Button></nav>
        <H1>React Discord Template</H1>
        <DiscordTemplate />
      <GlobalCSS/>
    </ThemeProvider>
  );


}
export default App;
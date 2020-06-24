import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalCSS,Button,H1} from "../Styles.js";
import DiscordTemplate from "./DiscordTemplate/DiscordTemplate.js";
import {GlobalProvider} from "../context/GlobalState.js";


const App = () => {

  const [theme, setTheme] = useState({mode:"dark"});
  const changeTheme = () => theme.mode === "dark" ? setTheme({mode:"light"}) : setTheme({mode:"dark"});


  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <nav><Button onClick={changeTheme}>Theme <span role="img">🙌</span></Button></nav>
        <H1>React Discord Template</H1>
        <DiscordTemplate />
        <GlobalCSS/>
      </GlobalProvider>

    </ThemeProvider>
  );


}
export default App;
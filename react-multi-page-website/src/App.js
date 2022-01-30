import './App.css';
import "./About.js"
import React from 'react';

function App() {
    return ( <
        div className = "App" >
        <
        div class = "topnav" >
        <
        a href = "About.js" > 03. Galleries < /a>  <
        a href = "About" > 02. Stories < /a>  <
        a href = "./About" > 01. Data < /a>  <
        a class = "active" > The % Project < /a> <
        /div>  <
        header className = "App-header" >
        <
        div class = "middle-text" >
        <
        h1 class = "white-font" > 44 % < /h1>  <
        h1 class = "grey-font" > of women < /h1> <br class="margin-check"/ >
        <
        h1 class = "white-font" > 20 % < /h1>  <
        h1 class = "grey-font" > of men < /h1> <br class="margin-check"/ >
        <
        h1 class = "white-font" > 67 % < /h1>  <
        h1 class = "grey-font" > of nonbinary students < /h1> <br class="margin-check"/ >
        <
        p class = "regular" > feel overwhelmed or uncomfortable being at the Math Lounge < /p>  <
        /div>  <
        /header>  <
        /div>
    );
}

export default App;
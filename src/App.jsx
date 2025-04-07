import React from "react";
import Counter from "./Counter.jsx";
import Greeting from "./Greeting.jsx";
import ShowHide from "./ShowHide.jsx";
import RefactorCounter from "./RefactorCounter.jsx";
import RefactorToggle from "./RefactorToggle.jsx";
import RefactorShowHide from "./RefactorShowHide.jsx";
import RbgSlide from "./RbgSlide.jsx";
import TextAlign from "./TextAlign.jsx";
import ColorChange from "./ColorChange.jsx";
import FontSize from "./FontSize.jsx";




class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Toggle />
        <ShowHide />
        <Greeting />
        <RefactorCounter />
        <RefactorToggle />
        <RefactorShowHide />
        <RbgSlide />
        <TextAlign />
        <ColorChange />
        <FontSize />      
      </div>
    );
  }
}

export default App;

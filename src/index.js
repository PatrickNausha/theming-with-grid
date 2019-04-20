import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const themes = ["theme1", "theme2", "theme3"];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  return (
    <div className={themes[themeIndex % themes.length]}>
      <button
        onClick={() => {
          setThemeIndex(index => index + 1);
        }}
      >
        Change theme
      </button>
      <div className="list-item">
        <div className="date">October 14, 2017</div>
        <div className="title">Sermon Title</div>
        <div className="thumbnail">⛪️</div>
        <div className="link">
          <button>Open in Faithlife Sermons ↗️</button>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          nisi id neque euismod sodales et eget lorem. Mauris euismod ut ante ac
          blandit. Proin sagittis quam nec lorem dignissim, ornare pulvinar
          velit tempor. Sed commodo cursus lacus, ac suscipit enim hendrerit a.
          Fusce faucibus blandit mauris quis cursus. Nullam urna sem, rhoncus
          vitae venenatis ut, mattis sit amet nisl. Ut faucibus eros nibh, vel
          sollicitudin orci scelerisque ut. Morbi nec augue nisi. Aliquam ut
          nibh dapibus, vehicula dui eu, laoreet massa.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

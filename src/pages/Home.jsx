import React from "react";
import "../styles/Home.css";
import me from "../imgs/me.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={me} alt="Me" />
        <h2>Vitória Santos</h2>
        <div className="prompt">
          <p>Estudante da Etec</p>
          <a
            className="social-media"
            href="https://www.linkedin.com/in/vit%C3%B3ria-da-silva-santos-2376a2252/"
          >
            Linkledin
          </a>
          <a className="social-media" href="https://github.com/geyhya">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

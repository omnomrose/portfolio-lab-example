import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

// import App from "./App";
function App() {
  return (
    <div>
      <h1> My lab example ~ </h1>
      <Avatar
        image="https://randomuser.me/api/portraits/women/92.jpg"
        name="Rose Nguyen"
        tagline="I design and build web applications!"
      />

      <WorkExperience id="1" profile="Rose Nguyen">
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
        <Company name="Netflix" from_date="Jan 2021" to_date="May 2021" />
        <Company name="Google" from_date="June 2021" to_date="Sept 2021" />
      </WorkExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/31/367/267" />
        <Project image="https://picsum.photos/id/31/367/267" />
        <Project image="https://picsum.photos/id/31/367/267" />
        <Project image="" />
      </Portfolio>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src="https://randomuser.me/api/portraits/women/92.jpg" alt="" />
      </div>
      <div>
        <p className="profile"> Hello I'm {props.name}</p>
        <p className="profile-tagline"> {props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h2> Work Experience </h2>
      <ul className="work">{props.children}</ul>
      {/*id:"1", profile:"Rose Nguyen", children: [Company, Company, Company] */}
    </div>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h2> Portfolio </h2>
      <div className="portfolio"> {props.children} </div>
    </div>
  );
}

function Project(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400";
  } else {
    image = props.image;
  }

  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <div className="project-description">
        Minions ipsum poopayee chasy hahaha wiiiii. Pepete chasy bee do bee do
        bee do la bodaaa aaaaaah wiiiii po kass underweaaar uuuhhh po kass. Bee
        do bee do bee do ti aamoo! Chasy pepete la bodaaa uuuhhh.
      </div>
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">{props.from_date}</span>
        <span className="to">{props.to_date}</span>
      </h2>
      <p>
        Minions ipsum poopayee chasy hahaha wiiiii. Pepete chasy bee do bee do
        bee do la bodaaa aaaaaah wiiiii po kass underweaaar uuuhhh po kass. Bee
        do bee do bee do ti aamoo! Chasy pepete la bodaaa uuuhhh.
      </p>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

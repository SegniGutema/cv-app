import "./styles/App.css";
import data from "./components/data";
import { PersonalInfo } from "./components/personalInfo";
import { Education } from "./components/education";
import { Experience } from "./components/experience";

function App() {
  return (
    <>
      <div className="main">
        <PersonalInfo personalInfo={data.personalInfo} />
        <Education education={data.education.list} />
        <Experience experience={data.experience.list} />
      </div>
      <div className="side"></div>
    </>
  );
}

export default App;

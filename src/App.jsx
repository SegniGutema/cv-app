import "./styles/App.css";
import data from "./components/data";
import { PersonalInfo } from "./components/personalInfo";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Contact } from "./components/contacts";
import { Skill } from "./components/skills";

function App() {
  return (
    <>
      <div className="main">
        <PersonalInfo key={data.personalInfo.id} />
        <Education key={data.education.id} />
        <Experience key={data.experience.id} />
        <Skill key={data.skills.id} />
      </div>
      <div className="side">
        <Contact key={data.contacts.id} />
      </div>
    </>
  );
}

export default App;

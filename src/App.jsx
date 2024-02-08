import "./styles/App.css";
import data from "./components/data";
import { EditPersonalInfo, PersonalInfo } from "./components/generalInfo";

function App() {
  return (
    <>
      <div className="main">
        <PersonalInfo personalInfo={data.personalInfo} />
      </div>
      <div className="side">
        <EditPersonalInfo personalInfo={data.personalInfo} />
      </div>
    </>
  );
}

export default App;

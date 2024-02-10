import { useState } from "react";
import "../styles/personalInfo.css";

export function PersonalInfo() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  function changeCompany(e) {
    setCompany(e.target.value);
  }

  function changePosition(e) {
    setPosition(e.target.value);
  }

  return (
    <section className="personalInfo">
      <input value={name} onChange={changeName} placeholder="Name" />
      <br />
      <input
        value={position}
        onChange={changePosition}
        placeholder="Position"
      />
      at
      <input value={company} onChange={changeCompany} placeholder="Company" />
    </section>
  );
}

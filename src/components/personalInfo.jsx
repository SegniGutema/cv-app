import { useState } from "react";
import "../styles/personalInfo.css";

function Input({ placeholder }) {
  const [value, setValue] = useState("");
  function changeInput(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <input
        key={placeholder}
        id={placeholder}
        value={value}
        onChange={changeInput}
        placeholder={placeholder}
      />
    </>
  );
}
export function PersonalInfo({ personalInfo }) {
  return (
    <section className="personalInfo">
      <Input placeholder={"Name"} />
      <Input placeholder={"Position"} />
      <br />
      <Input placeholder={"Company"} />
      <Input placeholder={"Email"} />
      <Input placeholder={"Tel"} />
      <Input placeholder={"Address"} />
    </section>
  );
}

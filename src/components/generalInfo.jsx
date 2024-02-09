import { useState } from "react";

function Input({ value, label }) {
  const [input, setInput] = useState(value);
  function changeInput(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <label>{label}</label>
      <br />
      <input value={input} onChange={changeInput} />
      <br />
    </>
  );
}
export function EditPersonalInfo({ personalInfo }) {
  return (
    <section className="general">
      <h1>Personal Info</h1>
      <Input label={"Name"} value={personalInfo.name} />
      <Input label={"Position"} value={personalInfo.position} />
      <Input label={"Company"} value={personalInfo.company} />
      <Input label={"Email"} value={personalInfo.email} />
      <Input label={"Tel"} value={personalInfo.tel} />
      <Input label={"Address"} value={personalInfo.address} />
    </section>
  );
}

export function PersonalInfo({ personalInfo }) {
  return (
    <section>
      <h1>{personalInfo.name}</h1>
      <h2>
        {personalInfo.position} at {personalInfo.company}
      </h2>
      <span>{personalInfo.email}</span>
      <span>{personalInfo.tel}</span>
      <span>{personalInfo.address}</span>
    </section>
  );
}

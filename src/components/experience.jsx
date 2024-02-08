import { useState } from "react";
import "../styles/experience.css";

function Input({ type, input, placeholder }) {
  const [value, setValue] = useState(input);
  function changeValue(e) {
    setValue(e.target.value);
  }
  return (
    <input
      type={type}
      value={value}
      onChange={changeValue}
      placeholder={placeholder}
    />
  );
}

function InputSection({ item }) {
  return (
    <div className="expCard">
      <Input type="text" input={item.company} placeholder={"company"} />
      <Input type="text" input={item.position} placeholder={"position"} />
      <Input type="date" input={item.startDate} placeholder={""} />
      <Input type="date" input={item.endDate} placeholder={""} />
    </div>
  );
}

export function Experience({ experience }) {
  const [exps, setExps] = useState(experience);

  function addExp() {
    setExps([
      ...exps,
      {
        id: "",
        company: "company",
        position: "position",
        startDate: "Present",
        endDate: "Present",
      },
    ]);
  }

  function deleteExp(expId) {
    let newExps = exps.filter((exp) => exp.id !== expId);
    setExps(newExps);
  }

  return (
    <section className="experience">
      <p>Experience</p>
      <hr className="divider" />
      <div className="expContainer">
        {exps.map((exp) => (
          <InputSection item={exp} />
        ))}
      </div>
    </section>
  );
}

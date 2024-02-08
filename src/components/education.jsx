import { useState } from "react";
import "../styles/education.css";

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
    <div className="eduCard">
      <Input
        type="text"
        input={item.school}
        placeholder={"school/university"}
      />
      <Input
        type="text"
        input={item.fieldOfStudy}
        placeholder={"field of studt"}
      />
      <Input type="date" input={item.startDate} placeholder={""} />
      <Input type="date" input={item.endDate} placeholder={""} />
    </div>
  );
}

export function Education({ education }) {
  const [edus, setEdus] = useState(education);

  function addEdu() {
    setEdus([
      ...edus,
      {
        id: "",
        school: "school/university",
        fieldOfStudy: "field of study",
        startDate: "Present",
        endDate: "Present",
      },
    ]);
  }

  function deleteEdu(eduId) {
    let newEdus = edus.filter((edu) => edu.id !== eduId);
    setEdus(newEdus);
  }

  return (
    <section className="education">
      <p>Education</p>
      <hr className="divider" />
      <div className="eduContainer">
        {edus.map((edu) => (
          <InputSection item={edu} />
        ))}
      </div>
    </section>
  );
}

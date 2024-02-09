import { useState } from "react";
import "../styles/education.css";
import { v4 as uuidv4 } from "uuid";

function Input({ type, placeholder }) {
  const [value, setValue] = useState("");
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
      <Input type="text" placeholder={"school/university"} />
      <Input type="text" placeholder={"field of studt"} />
      <Input type="date" placeholder={""} />
      <Input type="date" placeholder={""} />
    </div>
  );
}

export function Education({ education }) {
  const [edus, setEdus] = useState(education);
  const [editMode, setEditMode] = useState(false);

  function addEdu() {
    setEdus([
      ...edus,
      {
        id: uuidv4(),
        school: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  function deleteEdu(eduId) {
    let newEdus = edus.filter((edu) => edu.id !== eduId);
    setEdus(newEdus);
  }

  if (editMode) {
    return (
      <section
        className="education"
        // onFocus={() => setEditMode(!editMode)}
        // onClick={() => setEditMode(!editMode)}
      >
        <p>Education</p>
        <hr className="divider" />
        <div className="eduContainer">
          {edus.map((edu) => (
            <>
              <InputSection key={edu.id} item={edu} />
              <button id="deleteButton" onClick={() => deleteEdu(edu.id)}>
                Delete
              </button>
            </>
          ))}
        </div>
        <button id="addButton" onClick={() => addEdu()}>
          Add Education
        </button>
      </section>
    );
  }

  function deleteEdu(eduId) {
    let newEdus = edus.filter((edu) => edu.id !== eduId);
    setEdus(newEdus);
  }

  return (
    <section className="education" onFocus={() => setEditMode(true)}>
      <p>Education</p>
      <hr className="divider" />
      <div className="eduContainer">
        {edus.map((edu) => (
          <>
            <InputSection key={edu.id} item={edu} />
          </>
        ))}
      </div>
    </section>
  );
}

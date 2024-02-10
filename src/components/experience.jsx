import { useState } from "react";
import "../styles/experience.css";
import { v4 as uuidv4 } from "uuid";
import data from "./data";

function Input({ data }) {
  const [value, setValue] = useState("");
  function changeValue(e) {
    setValue(e.target.value);
  }
  return (
    <input
      type={"text"}
      value={value}
      onChange={changeValue}
      placeholder={data}
    />
  );
}

function InputSection() {
  return (
    <div className="expCard">
      <Input data="company" />
      <Input data={"position"} />
      from :
      <Input data={"enter start date"} />
      to :
      <Input data={"enter end date"} />
    </div>
  );
}

export function Experience() {
  let experienceList = data.experience.list;
  const [exps, setExps] = useState(experienceList);
  const [editMode, setEditMode] = useState(false);

  function addExp() {
    setExps([
      ...exps,
      {
        id: uuidv4(),
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
    <section className="experience" onFocus={() => setEditMode(true)}>
      <p>Experience</p>
      <hr className="divider" />
      <div className="expContainer">
        {exps.map((exp) => (
          <>
            <InputSection key={exp.id} item={exp} />
            {editMode && (
              <div>
                <button id="deleteButton" onClick={() => deleteExp(exp.id)}>
                  Delete
                </button>
              </div>
            )}
          </>
        ))}
      </div>
      {editMode && (
        <div>
          <button id="saveButton" onClick={() => setEditMode(!editMode)}>
            Save
          </button>
          <button id="addButton" onClick={() => addExp()}>
            Add Experience
          </button>
        </div>
      )}
    </section>
  );
}

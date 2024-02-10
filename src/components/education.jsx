import { useState } from "react";
import "../styles/education.css";
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
    <div className="eduCard">
      <Input data={"school/university"} />
      <Input data={"field of study"} />
      from:
      <Input data={"enter start date"} />
      to:
      <Input data={"enter end date"} />
    </div>
  );
}

export function Education() {
  let educationList = data.education.list;
  const [edus, setEdus] = useState(educationList);
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

  // if (editMode) {
  //   return (
  //     <section
  //       className="education"
  //       // onFocus={() => setEditMode(!editMode)}
  //       // onClick={() => setEditMode(!editMode)}
  //     >
  //       <p>Education</p>
  //       <hr className="divider" />
  //       <div className="eduContainer">
  //         {edus.map((edu) => (
  //           <>
  //             <InputSection key={edu.id} item={edu} />
  //             <button id="deleteButton" onClick={() => deleteEdu(edu.id)}>
  //               Delete
  //             </button>
  //           </>
  //         ))}
  //       </div>
  //       <button id="addButton" onClick={() => addEdu()}>
  //         Add Education
  //       </button>
  //     </section>
  //   );
  // }

  return (
    <section className="experience" onFocus={() => setEditMode(true)}>
      <p>Experience</p>
      <hr className="divider" />
      <div className="expContainer">
        {edus.map((edu) => (
          <>
            <InputSection key={edu.id} item={edu} />
            {editMode && (
              <div>
                <button id="deleteButton" onClick={() => deleteEdu(edu.id)}>
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
          <button id="addButton" onClick={() => addEdu()}>
            Add Experience
          </button>
        </div>
      )}
    </section>
  );
}

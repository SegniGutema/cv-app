import { useState } from "react";
import "../styles/experience.css";
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
    <div className="expCard">
      <Input type="text" placeholder={"company"} />
      <Input type="text" placeholder={"position"} />
      <Input type="date" placeholder={""} />
      <Input type="date" placeholder={""} />
    </div>
  );
}

export function Experience({ experience }) {
  const [exps, setExps] = useState(experience);
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

  // if (editMode) {
  //   return (
  //     <section
  //       className="experience"
  //       // onFocus={() => setEditMode(!editMode)}
  //       // onClick={() => setEditMode(!editMode)}
  //     >
  //       <p>Experience</p>
  //       <hr className="divider" />
  //       <div className="expContainer">
  //         {exps.map((exp) => (
  //           <>
  //             <InputSection item={exp} />
  //             <button id="deleteButton" onClick={() => deleteExp(exp.id)}>
  //               Delete
  //             </button>
  //             <button id="saveButton" onClick={() => setEditMode(!editMode)}>
  //               Save
  //             </button>
  //           </>
  //         ))}
  //       </div>
  //       <button id="addButton" onClick={() => addExp()}>
  //         Add Experience
  //       </button>
  //     </section>
  //   );
  // }

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

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/skills.css";
import data from "./data";

function Input() {
  const [value, setValue] = useState("");

  function changeValue(e) {
    setValue(e.target.value);
  }
  return (
    <input
      value={value}
      onChange={changeValue}
      placeholder="add skill here"
    ></input>
  );
}

export function Skill() {
  let skills = data.skills.list;
  const [skillList, setSkillList] = useState(skills);
  const [editMode, setEditMode] = useState(false);

  function addSkill() {
    let newSkillList = [
      ...skillList,
      {
        id: uuidv4(),
        content: "",
      },
    ];
    setSkillList(newSkillList);
  }

  function deleteSkill(id) {
    let newSkillList = skillList.filter((contact) => contact.id !== id);
    setSkillList(newSkillList);
  }

  return (
    <section id="skill" onFocus={() => setEditMode(true)}>
      <p id="skillHeader">Skills</p>
      <hr className="divider" />
      {skillList.map((skill) => (
        <div key={setSkillList.id}>
          <Input id={setSkillList.id} />
          {editMode && (
            <div>
              <button id="deleteButton" onClick={() => deleteSkill(skill.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
      {editMode && (
        <div>
          <button id="saveButton" onClick={() => setEditMode(!editMode)}>
            Save
          </button>
          <button id="addSkillButton" onClick={addSkill}>
            Add
          </button>
        </div>
      )}
    </section>
  );
}

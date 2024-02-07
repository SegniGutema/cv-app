import { useState } from "react";

export function Form() {
  const [name, setName] = useState("Your Name");
  const [title, setTitle] = useState("Title");

  function changeName(e) {
    setName(e.target.value);
  }
  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    return (
      <div>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {name}:<br />
        <input type="text" name="name" value={name} onChange={changeName} />
      </label>
      <br />
      <label>
        {title}:<br />
        <input type="text" name="title" value={title} onChange={changeTitle} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
export function generalInfo() {
  return (
    <div className="general">
      <Form />
    </div>
  );
}

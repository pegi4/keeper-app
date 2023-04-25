import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
    } else {
      setContent(value);
    }
  }

  function handleClick(event) {
    event.preventDefault();

    const newNote = {
      title: title,
      content: content
    };

    props.addItem(newNote);

    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

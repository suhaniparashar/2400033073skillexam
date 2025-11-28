import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    course: "",
    rating: "",
    comment: "",
    file: null
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setForm({ ...form, file: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.name === "" ||
      form.course === "" ||
      form.rating === "" ||
      form.comment === "" ||
      form.file === null
    ) {
      alert("All fields are required!");
      return;
    }

    alert("Form Submitted Successfully!");

    console.log("Name:", form.name);
    console.log("Course:", form.course);
    console.log("Rating:", form.rating);
    console.log("Comment:", form.comment);
    console.log("File:", form.file.name);
  };

  return (
    <div className="container">
      <h2>Student Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="text"
          id="course"
          placeholder="Enter Course"
          onChange={handleChange}
        />

        <select id="rating" onChange={handleChange}>
          <option value="">Select Rating</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
        </select>

        <textarea
          id="comment"
          placeholder="Write your Feedback"
          onChange={handleChange}
        ></textarea>

        <input type="file" id="file" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

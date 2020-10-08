import React from "react";
import "./styles.css";
export default function ({ student = {} }) {
  return (
    <>
      <div>
        <b>Name:</b>
        {student.name}
      </div>
      <div>
        <b>Hobby:</b>
        {student.hobby}
      </div>
    </>
  );
}

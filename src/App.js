import React from "react";
import "./styles.css";
import Studlist from "./studlist";
import Studdata from "./studentdetail";
export default function App() {
  const stud = [
    {
      name: "Yash",
      hobby: "Code"
    },
    {
      name: "Harsh",
      hobby: "UI/UX"
    },
    {
      name: "Divyani",
      hobby: "Binge-watch"
    },
    {
      name: "Aditya",
      hobby: "Chess"
    },
    {
      name: "Akash",
      hobby: "Code"
    },
    {
      name: "Swastika",
      hobby: "Sketch"
    },
    {
      name: "Ambuj",
      hobby: "books"
    },
    {
      name: "Ayush",
      hobby: "Bike"
    }
  ];
  const [studid, setstudid] = React.useState(-1);
  const [studl, setstudl] = React.useState(stud);
  const handleclick = (id) => {
    setstudid(id);
  };
  const handlechange = (event) => {
    let temp = [...stud];
    temp = temp.filter(
      (student) =>
        student.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) === true
    );
    setstudl(temp);
  };
  return (
    <div className="App">
      <div className="leftcol">
        <Studlist
          students={studl}
          onclick={handleclick}
          onchange={handlechange}
        />
      </div>
      <div className="rightcol">
        <Studdata student={studl[studid]} />
      </div>
    </div>
  );
}

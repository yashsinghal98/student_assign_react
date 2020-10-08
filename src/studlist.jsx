import React from "react";
import "./styles.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function SimpleList(props) {
  const stud = props.students;
  const onclick = props.onclick;
  const onchange = props.onchange;
  return (
    <div className="left">
      <List component="nav" aria-label="main mailbox folders">
        <input
          type="text"
          className="inputbox"
          placeholder="Search..."
          onChange={() => {
            onchange(event);
          }}
        />
        {stud.map((student, index) => (
          <ListItem button onClick={() => onclick(index)} key={index}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={student.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

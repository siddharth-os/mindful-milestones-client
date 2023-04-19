import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useFetcher } from "react-router-dom";

export default function TaskList() {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 1, 1, 1, 1];
  const [newTask, setNewTask] = useState("");
  const [isChecked,setIsChecked]=useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      console.log('Checkbox is checked. Perform task A.');
    } else {
      console.log('Checkbox is unchecked. Perform task B.');
    }
  }
  const handleChangeActivity = (e) => {
    setNewTask(e.target.value);
  };
  const handleActivitySubmit = (e) => {
    e.preventDefault();
    console.log(newTask);
  };
  return (
    <div>
      <div className="task-list" style={{ height: "300px", overflow: "auto" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Assigned</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            {l.map((e) => {
              return (
                <tr>
                  <td>
                    {/* <input className="checkbox-activity" type="checkbox" name="isAssigned" /> */}
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>Walk for 500m then rest for 2min. Repeat for 3 times.</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <form style={{ textAlign: "center" }} onSubmit={handleActivitySubmit}>
        <TextField
          id="standard-basic"
          label="Add New Task"
          variant="standard"
          value={newTask}
          onChange={handleChangeActivity}
          fullWidth
        />
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          style={{ margin: "1rem" }}
        >
          <i class="fa-solid fa-plus">Add New Task</i>
        </button>
      </form>
    </div>
  );
}

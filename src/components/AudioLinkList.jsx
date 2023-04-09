import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function AudioLinkList() {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 1, 1, 1, 1];
  const [newTask, setNewTask] = useState("");

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
              <th scope="col">Links / Url</th>
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
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>https://youtu.be/kJIidWqWjUs</td>
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
          label="Add New Link"
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
          <i class="fa-solid fa-plus">Add New Link</i>
        </button>
      </form>
    </div>
  );
}
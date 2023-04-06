import React from "react";

export default function DoctorsList() {
  const arr = [1, 2, 3, 4, 5, 6,7,8,9,10,11];
  return (
    <table class="table doc-list-table" style={{}}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((ele) => {
          return (
            <tr>
              <th scope="row">{ele}</th>
              <td>Dr. Shyamlal</td>
              <td>Batra</td>
              <td><a href="#">click here</a></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

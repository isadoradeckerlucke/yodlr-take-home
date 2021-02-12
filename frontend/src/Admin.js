import React from "react";
import Table from "react-bootstrap/Table";
import "./Admin.css";

function Admin({ users }) {
  return (
    <section className="col-md-4">
      <h1 className="font-weight-bold text-center">All Users</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={`${user.id}`}>
              <td>{user.id}</td>
              <td>
                <a href={`/users/${user.id}`}>{user.firstName}</a>
              </td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default Admin;

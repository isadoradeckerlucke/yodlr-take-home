import React from "react";
import { Redirect, useParams } from "react-router-dom";

function User({ users, cantFind }) {
  const { id } = useParams();

  let user = users.find((user) => {
    return `${user.id}` === id;
  });

  if (!user) return <Redirect to={cantFind} />;

  return (
    <div>
      <h1>
        welcome to {user.firstName} {user.lastName}'s page!
      </h1>
      <p>
        {user.firstName} is a {user.state} user. You can contact{" "}
        {user.firstName} at {user.email}.
      </p>
    </div>
  );
}

export default User;

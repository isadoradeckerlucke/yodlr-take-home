import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Admin({ users }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            All Users
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {users.map((user) => (
              <Link to={`/users/${user.id}`} key={user.id}>
                <ListGroupItem>
                  {user.firstName} {user.lastName}
                </ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Admin;

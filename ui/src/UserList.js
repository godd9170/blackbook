import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const UserList = () => (
  <Query
    query={gql`
      {
        contacts(first: 10) {
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      console.log("DATA: ", data);
      console.log("Error: ", error);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return (
        <div className="UserList">
          <h1>Users:</h1>
          <ul>{data.users.map(({ name }, i) => <li key={i}>{name}</li>)}</ul>
        </div>
      );
    }}
  </Query>
);

export default UserList;

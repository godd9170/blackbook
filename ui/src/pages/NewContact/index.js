import React, { Fragment, Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const Centered = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
`;

class NewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newContact: {
        firstName: null,
        lastName: null,
        email: null
      }
    };
  }

  updateForm = (attribute, value) => {
    this.setState({
      newContact: { ...this.state.newContact, [attribute]: value }
    });
  };

  createContact = () => {
    const {
      newContact: { firstName, lastName, email }
    } = this.state;
    alert(`${firstName} ${lastName}: ${email}`);
  };

  render() {
    const {
      newContact: { firstName, lastName, email }
    } = this.state;
    return (
      <Centered>
        <input
          value={firstName}
          placeholder="Joe"
          onChange={evt => this.updateForm("firstName", evt.target.value)}
        />
        <input
          value={lastName}
          placeholder="Blow"
          onChange={evt => this.updateForm("lastName", evt.target.value)}
        />
        <input
          value={email}
          placeholder="jblow@blackbook.com"
          onChange={evt => this.updateForm("email", evt.target.value)}
        />
        <button onClick={this.createContact}>Add</button>
      </Centered>
    );
  }
}

export default NewContact;

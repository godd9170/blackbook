import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default class ControlPanel extends Component {
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <Panel className="control-panel">
        <div>
          Name: {firstName} {lastName}
        </div>
        <div>Email: {email}</div>
      </Panel>
    );
  }
}

import React, { Component } from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  height: 30px;
  border-bottom: 1px solid black;
  padding: 5px;
`;

const Logo = styled.div`
  width 40px;
  line-height: 30px;
`;

const RightNav = styled.div`
  flex: 1;
`;

export default class NavBar extends Component {
  render() {
    return (
      <Bar>
        <Logo>Blackbook</Logo>
        <RightNav />
      </Bar>
    );
  }
}

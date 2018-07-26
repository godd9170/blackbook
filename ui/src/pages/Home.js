import React, { Fragment, Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ContactGraph from "../components/ContactGraph";
import ControlPanel from "../components/ControlPanel";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  height: 100%;
`;

const MainPanel = styled.div`
  flex: 1;
`;

const RightPanel = styled.section`
  width: 300px;
  border-left: 1px solid #000;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {
        firstName: null,
        lastName: null,
        email: null
      }
    };
  }

  updateSelectedUser = newSelectedUser => {
    this.setState({
      selectedUser: newSelectedUser
    });
  };

  render() {
    const { selectedUser } = this.state;
    return (
      <Query
        query={gql`
          {
            contacts(first: 10) {
              firstName
              lastName
              email
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
            <Fragment>
              <NavBar />
              <Main>
                <MainPanel>
                  <ContactGraph
                    contacts={data.contacts}
                    updateSelectedUser={this.updateSelectedUser}
                  />
                </MainPanel>
                <RightPanel>
                  <ControlPanel {...selectedUser} />
                </RightPanel>
              </Main>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Home;

import React, { Component } from "react";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from "react-vis-force";

export default class ContactGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth - 300,
      height: window.innerHeight
    });
  };

  mapContacts = contacts => {
    return contacts.map(contact => {
      return (
        <ForceGraphNode
          node={{
            ...contact,
            id: contact.email,
            radius: 15,
            strength: {
              collide: 10
            }
          }}
          fill="red"
        />
      );
    });
  };

  mapRelationships = contacts => {
    return contacts.map(contact => {
      return (
        <ForceGraphLink
          link={{ source: contact.email, target: "me@henrygoddard.com" }}
        />
      );
    });
  };

  render() {
    const { height, width } = this.state;
    const { updateSelectedUser, contacts } = this.props;
    return (
      <InteractiveForceGraph
        zoom
        zoomOptions={{
          minScale: 0.5,
          maxScale: 5
          //   onZoom: action("zoomed"),
          //   onPan: action("panned")
        }}
        radiusMargin={10}
        simulationOptions={{ height, width, animate: true }}
        onSelectNode={(_, node) => updateSelectedUser(node)}
        highlightDependencies
      >
        {this.mapContacts(contacts)}
        {this.mapRelationships(contacts)}
      </InteractiveForceGraph>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const Main = () => (
  <Router>
    <ApolloProvider client={client}>
      <Route exact path="/" component={Home} />
      <Route path="/new-contact" component={NewContact} />
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();

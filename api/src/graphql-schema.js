import { neo4jgraphql } from "neo4j-graphql-js";

export const typeDefs = `
type Contact {
  id: ID!
  email: String
  firstName: String
  lastName: String
  address: String
  city: String
  state: String
  friends(first: Int = 10, offset: Int = 0): [User] @relation(name: "FRIENDS", direction: "BOTH")
  coworkers(first: Int = 10, offset: Int = 0): [User] @relation(name: "WORKSWITH", direction: "BOTH")
  relatives(first: Int = 10, offset: Int = 0): [User] @relation(name: "RELATEDTO", direction: "BOTH")
  reminders(first: Int = 10, offset: Int = 0): [Reminder] @relation(name: "REMINDTO", direction: "OUT")
}

type Reminder {
  id: ID!
  name: String
  description: String
}

type Query {
    contacts(id: ID, name: String, first: Int = 10, offset: Int = 0): [Contact]
    reminders(id: ID, name: String, first: Int = 10, offset: Int = 0): [Reminder]
}
`;

export const resolvers = {
  Query: {
    contacts: neo4jgraphql,
    reminders: neo4jgraphql
  }
};

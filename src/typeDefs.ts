import {gql} from 'apollo-server'

export const typeDefs = gql`

  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  scalar Date
  
  type User {
    id: Int,
    firstName: String,
    lastName: String,
    email: String,
    age: Int,
  }

  type TodoList {
    id: Int,
    title: String,
    done: Boolean,
    created_at:Date,
    done_at:Date,
    todos:[Todo]
  }
  type Project {
    id: Int,
    title: String,
    done: Boolean,
    created_at:Date,
    done_at:Date,
    todoLists:[TodoList]
  }

  type Todo {
    id: Int,
    title: String,
    done: Boolean,
    created_at:Date,
    done_at:Date,
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User],
    user: User,
    # todos:[Todo],
    # todoLists:[TodoList],
    # projects:[Projects],
  }
  type Mutation {
    createUser(firstName: String!, lastName: String!, age: Int!, email: String! ):User!,
    updateUser(id: Int!, firstName: String!, lastName: String!, age: Int!, email: String!):User!,
    deleteUser(id: Int!):Boolean!,
  }
`;
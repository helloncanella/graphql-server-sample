import { GraphQLServer } from "graphql-yoga"
import { importSchema } from "graphql-import"

const server = new GraphQLServer({
  typeDefs: importSchema("./graphql/index.graphql"),
  resolvers: {},
  mocks: {
    Query: () => ({
      hello: () => "hiu"
    })
  }
})

server
  .start(() => {
    console.log("server is running on the localhost:4000")
  })
  .catch(e => console.error(e))

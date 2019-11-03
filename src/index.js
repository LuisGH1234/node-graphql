const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const fs = require("fs");
const path = require("path");
const app = express();
const { users } = require("./common");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(
    fs.readFileSync(path.join(__dirname, "./graphql/schema.graphql")).toString()
);

// The root provides a resolver function for each API endpoint
const root = {
    hello: (obj, args, context, info) => {
        // console.log(obj);
        return `Hello, Your name is ${obj.name}`;
    },
    user: (obj, args, context, info) => {
        // console.log(obj, args, context, info);
        const user = users.find(x => x.id == obj.id);
        // console.log(obj, user);
        return user;
    }
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");

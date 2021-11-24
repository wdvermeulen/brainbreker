import gql from "graphql-tag";

const clientSchemaExtensions = gql`
  directive @model on OBJECT
  directive @connection(name: String) on FIELD_DEFINITION
  scalar AWSDateTime
`;

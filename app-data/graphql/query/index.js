import gql from 'graphql-tag';

export const getLocaleQuery = gql`
  query {
    lang @client
  }
`;

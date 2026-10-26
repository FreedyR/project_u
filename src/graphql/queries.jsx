import { gql } from "@apollo/client";

export const GET_LECTURES = gql`
  query Lectures {
    lectures {
      name
      type
      signed
    }
  }
`;
export const GET_LECTURE_TYPES = gql`
  query Query {
    lectureTypes
  }
`;

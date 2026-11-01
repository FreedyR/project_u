import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query Courses {
    courses {
      name
      type
      signed
    }
  }
`;
export const GET_COURSE_TYPES = gql`
  query Query {
    courseTypes
  }
`;

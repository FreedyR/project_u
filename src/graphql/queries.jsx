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
export const GET_LECTURE_ENUM = gql`
  query GetLectureEnum {
    __type(name: "LectureEnum") {
      enumValues {
        name
      }
    }
  }
`;

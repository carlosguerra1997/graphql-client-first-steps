import { gql } from "@apollo/client"

export const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    username
  }
}`

export const CREATE_PERSON = gql`
mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String) {
  addPerson(name: $name, street: $street, city: $city, phone: $phone) {
    id
    name
    phone
    address {
      city
      street
    }
  }
}`

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`

export const EDIT_NUMBER = gql`
  mutation EditNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`
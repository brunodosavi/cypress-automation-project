const baseUrl = 'https://reqres.in/api';

export const fetchUsersByPage = (page = 1) =>
  cy.request(`${baseUrl}/users?page=${page}`);

export const fetchUserById = (id) =>
  cy.request(`${baseUrl}/users/${id}`);

export const createUser = (body) =>
  cy.request('POST', `${baseUrl}/users`, body);

export const updateUser = (id, body) =>
  cy.request('PUT', `${baseUrl}/users/${id}`, body);

export const deleteUser = (id) =>
  cy.request('DELETE', `${baseUrl}/users/${id}`);

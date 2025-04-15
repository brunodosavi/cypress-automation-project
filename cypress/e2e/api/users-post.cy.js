import { createUser } from '../../support/apiHelpers';

describe('POST /users - Create New User', () => {
  let payload;

  before(() => {
    cy.fixture('users').then((data) => {
      payload = data.newUser;
    });
  });

  it('should create a user and return user data with ID and timestamp', () => {
    createUser(payload).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include.keys('name', 'job', 'id', 'createdAt');
      expect(response.body.name).to.eq(payload.name);
      expect(response.body.job).to.eq(payload.job);
    });
  });
});

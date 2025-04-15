import { updateUser } from '../../support/apiHelpers';

describe('PUT /users/:id - Update Existing User', () => {
  let payload;

  before(() => {
    cy.fixture('users').then((data) => {
      payload = data.updatedUser;
    });
  });

  it('should update user and return updated data with timestamp', () => {
    updateUser(2, payload).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', payload.name);
      expect(response.body).to.have.property('job', payload.job);
      expect(response.body).to.have.property('updatedAt');
    });
  });
});

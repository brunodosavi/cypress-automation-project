import { deleteUser } from '../../support/apiHelpers';

describe('DELETE /users/:id - Delete User', () => {
  it('should return 204 No Content for valid delete', () => {
    deleteUser(2).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});

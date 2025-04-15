import { fetchUsersByPage } from "../../support/apiHelpers";

describe('GET /users returns correct structure across pages', () => {
    const assertUserStructure = (user) => {
        expect(user, 'User has email property').to.have.property('email');
        expect(user.email, 'Email is a string').to.be.a('string');
        expect(user, 'User has id property').to.have.property('id');
      };
    
      [1, 2].forEach((page) => {
        it(`should return 6 users on page ${page}`, () => {
          fetchUsersByPage(page).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length(6);
    
            const firstUser = response.body.data[0];
            assertUserStructure(firstUser);
          });
        });
      });
});
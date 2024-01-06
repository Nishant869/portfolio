import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(FooterComponent);
  });
});

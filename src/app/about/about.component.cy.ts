import { AboutComponent } from './about.component';

describe('StepperComponent', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(AboutComponent);
  });
});

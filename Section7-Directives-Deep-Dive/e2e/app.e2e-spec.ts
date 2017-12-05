import { Section7DirectivesDeepDivePage } from './app.po';

describe('section7-directives-deep-dive App', () => {
  let page: Section7DirectivesDeepDivePage;

  beforeEach(() => {
    page = new Section7DirectivesDeepDivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Section13ObservablesPage } from './app.po';

describe('section13-observables App', () => {
  let page: Section13ObservablesPage;

  beforeEach(() => {
    page = new Section13ObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

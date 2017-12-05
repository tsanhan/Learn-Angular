import { Section17PipesPage } from './app.po';

describe('section17-pipes App', () => {
  let page: Section17PipesPage;

  beforeEach(() => {
    page = new Section17PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

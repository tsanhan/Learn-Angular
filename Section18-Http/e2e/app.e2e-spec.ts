import { Section18HttpPage } from './app.po';

describe('section18-http App', () => {
  let page: Section18HttpPage;

  beforeEach(() => {
    page = new Section18HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Section15FormsPage } from './app.po';

describe('section15-forms App', () => {
  let page: Section15FormsPage;

  beforeEach(() => {
    page = new Section15FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

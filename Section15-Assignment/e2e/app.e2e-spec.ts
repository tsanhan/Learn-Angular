import { Section15AssignmentPage } from './app.po';

describe('section15-assignment App', () => {
  let page: Section15AssignmentPage;

  beforeEach(() => {
    page = new Section15AssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

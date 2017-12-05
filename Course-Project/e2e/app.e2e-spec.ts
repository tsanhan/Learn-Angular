import { Section3CourseProjectPage } from './app.po';

describe('section3-course-project App', () => {
  let page: Section3CourseProjectPage;

  beforeEach(() => {
    page = new Section3CourseProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

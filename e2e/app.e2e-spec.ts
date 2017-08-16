import { NgExamplePage } from './app.po';

describe('ng-example App', () => {
  let page: NgExamplePage;

  beforeEach(() => {
    page = new NgExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

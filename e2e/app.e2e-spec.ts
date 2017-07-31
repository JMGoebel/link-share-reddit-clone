import { LinkSharePage } from './app.po';

describe('link-share App', () => {
  let page: LinkSharePage;

  beforeEach(() => {
    page = new LinkSharePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

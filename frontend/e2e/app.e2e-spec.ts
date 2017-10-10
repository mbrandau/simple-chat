import { AppPage } from './app.po';

describe('frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display start components welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to simple-chat!');
  });
});

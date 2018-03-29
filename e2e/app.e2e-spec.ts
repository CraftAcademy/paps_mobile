import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Home', () => {
      page.getHomeTitleText().then(title => {
        expect(title).toEqual('Home');
      });
    });

    it('should have article title My first article', ()  => {
      page.getArticleTitle().then(article => {
        expect(article).toEqual('My first article');
      });
    });
  });
});

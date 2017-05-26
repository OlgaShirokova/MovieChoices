import { MovieChoicesPage } from './app.po';

describe('movie-choices App', () => {
  let page: MovieChoicesPage;

  beforeEach(() => {
    page = new MovieChoicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Angular2FormatjsPage } from './app.po';

describe('angular2-formatjs App', function() {
  let page: Angular2FormatjsPage;

  beforeEach(() => {
    page = new Angular2FormatjsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-formatjs Works!');
  });
});

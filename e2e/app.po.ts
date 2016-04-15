export class Angular2FormatjsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-formatjs-app p')).getText();
  }
}

import { UhcPage } from './app.po';

describe('uhc App', function() {
  let page: UhcPage;

  beforeEach(() => {
    page = new UhcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

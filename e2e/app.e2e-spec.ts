import { MyAngular2HttpAppPage } from './app.po';

describe('my-angular2-http-app App', function() {
  let page: MyAngular2HttpAppPage;

  beforeEach(() => {
    page = new MyAngular2HttpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

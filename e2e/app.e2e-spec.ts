import { FlowAppPage } from './app.po';

describe('flow-app App', function() {
  let page: FlowAppPage;

  beforeEach(() => {
    page = new FlowAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

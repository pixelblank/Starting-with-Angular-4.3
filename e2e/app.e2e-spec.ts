import { Ng2ServicesPage } from './app.po';

describe('ng2-services App', () => {
  let page: Ng2ServicesPage;

  beforeEach(() => {
    page = new Ng2ServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

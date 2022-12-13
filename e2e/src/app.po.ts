import { browser, by, element, promise } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get('/');
  };

  async getTitleText():Promise<string>{
    return element(by.deepCss('app-root <ion-card-title>')).getText();
  };
  async getTextP():Promise<string>{
    return element(by.css('app-root <p>')).getText();
 };
 async getTextCard():Promise<string>{
  return element(by.css('app-root <ion-card>')).getText();
};

}

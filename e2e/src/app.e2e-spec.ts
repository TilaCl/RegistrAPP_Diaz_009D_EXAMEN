import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('Testeo e2e', () => {
  let page: AppPage;

  //Configuracion
  beforeEach(() => {
    browser.waitForAngularEnabled(false)
    page = new AppPage();
  });
//==========================================================================
//Testeo 1
  it('Testeo 1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Bienvenid@ {{Nombre}}');
  });
//==========================================================================
//Testeo 2
it('Testeo 2', () => {
  page.navigateTo();
  expect(page.getTextP()).toContain('tutorial');
});
//==========================================================================
//Testeo 3
it('Testeo 3', () => {
  page.navigateTo();
  expect( page.getTextCard()).toMatch('¿Cómo funciona?');
});


  
});


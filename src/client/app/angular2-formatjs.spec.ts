import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2FormatjsApp} from '../app/angular2-formatjs';

beforeEachProviders(() => [Angular2FormatjsApp]);

describe('App: Angular2Formatjs', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2FormatjsApp], (app: Angular2FormatjsApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2FormatjsApp], (app: Angular2FormatjsApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});


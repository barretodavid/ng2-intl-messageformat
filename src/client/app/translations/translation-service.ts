import {Injectable} from 'angular2/core';
import {ILanguage, LANGUAGES} from './languages';
import {MESSAGES} from './messages';

@Injectable()
export class TranslationService {
  private messages: any = MESSAGES;
  private languages: ILanguage[] = LANGUAGES;
  private activeLangCode: string;

  public getMessages(): any[] {
    return this.messages[this.activeLangCode];
  }

  public getLanguages(): ILanguage[] {
    return this.languages;
  }

  public setActiveLangCode(langCode: string): void {
    this.activeLangCode = langCode;
  }

  public getActiveLangCode(): string {
    return this.activeLangCode;
  }
}

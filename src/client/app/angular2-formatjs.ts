import {Component, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';
import {TranslationService} from './translations/translation-service';
import {ILanguage} from './translations/languages';
import {TranslationPipe} from './translations/translation-pipe';

@Component({
  selector: 'angular2-formatjs-app',
  providers: [TranslationService],
  templateUrl: 'app/angular2-formatjs.html',
  pipes: [TranslationPipe]
})
export class Angular2FormatjsApp implements OnInit {
  public languages: ILanguage[];
  public languageControl: Control;
  public TEXT: any = {};

  constructor(
    private translation: TranslationService
  ) {}

  ngOnInit() {
    this.languages = this.translation.getLanguages();
    let defaultLangCode = this.configLangSelector(this.languages);
    this.translation.setActiveLangCode(defaultLangCode);
    this.TEXT = this.translation.getMessages();
  }

  public configLangSelector(languages: ILanguage[]): string {
    let defaultLangIndex = 0;
    this.languageControl = new Control(defaultLangIndex);
    this.languageControl.valueChanges.subscribe(this.onLanguageChange.bind(this));
    return languages[defaultLangIndex].code;
  }

  public onLanguageChange(index: number) {
    let langCode = this.languages[index].code;
    this.translation.setActiveLangCode(langCode);
    this.TEXT = this.translation.getMessages();
  }
}

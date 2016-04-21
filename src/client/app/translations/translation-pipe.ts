import {Pipe, PipeTransform} from 'angular2/core';
import {TranslationService} from './translation-service';
import IntlMessageFormat from 'intl-messageformat';

@Pipe({name: 'translate'})
export class TranslationPipe implements PipeTransform {
  constructor(
    private translation: TranslationService
  ) {}

  public transform(message: string, options?: any[]): string {
    let langCode: string = this.translation.getActiveLangCode();
    let enumPhotos = new IntlMessageFormat(message, langCode);
    return enumPhotos.format(options[0]);
  }
}

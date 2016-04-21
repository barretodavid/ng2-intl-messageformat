export interface ILanguage {
  name: string;
  country: string;
  code: string;
}

export const LANGUAGES: ILanguage[] = [
  {
    name: 'English',
    country: 'USA',
    code: 'en-US'
  },
  {
    name: 'Español',
    country: 'México',
    code: 'es-MX'
  }
];

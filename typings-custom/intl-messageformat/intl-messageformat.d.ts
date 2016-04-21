declare module 'intl-messageformat' {
    interface IntlMessageFormat<T> {
        format(values?: T): string;
    }

    interface IntlMessageFormatConstructor {
        new <T>(message: string, locales?: string | string[], formats?: {}): IntlMessageFormat<T>;
    }

    const IntlMessageFormat: IntlMessageFormatConstructor;

    export = IntlMessageFormat;
}

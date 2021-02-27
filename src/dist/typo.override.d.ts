declare const typoOptions: {

    logo: string;

    menu: string;

    guide: string;

    text: string;

    pen: string;

    pretty: string;

    pretty2: string;

};

export declare type TypoOptionsType = typeof typoOptions;

export declare type TypoUnion = keyof TypoOptionsType;

export default typoOptions;


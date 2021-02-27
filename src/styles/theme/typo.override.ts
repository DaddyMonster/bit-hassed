const typoOptions = {
  logo: "S-CoreDream-9Black, 'Roboto'",
  menu: "GmarketSansBold, 'Roboto'",
  guide: "GmarketSansMedium, 'Roboto'",
  text: "GmarketSansLight, 'Roboto'",
  pen: "KyoboHand, 'Roboto'",
  pretty: "S-CoreDream-2ExtraLight, 'Roboto'",
  pretty2: "'Open Sans Condensed', 'sans-serif'",
};
type TypoOptionsType = typeof typoOptions;
export type TypoUnion = keyof TypoOptionsType;

declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    fontFam: TypoOptionsType;
  }
  interface Typography {
    fontFam: TypoOptionsType;
  }
}

export default typoOptions;

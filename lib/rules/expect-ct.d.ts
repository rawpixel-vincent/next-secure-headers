import type { ResponseHeader } from "../shared";
export type ExpectCTOption = boolean | [true, Partial<{
    maxAge: number;
    enforce: boolean;
    reportURI: string | URL;
}>];
export declare const createExpectCTHeaderValue: (option?: ExpectCTOption, strictURIEncoder?: (uri: string | URL) => string) => string | undefined;
export declare const createExpectCTHeader: (option?: ExpectCTOption, headerValueCreator?: (option?: ExpectCTOption, strictURIEncoder?: (uri: string | URL) => string) => string | undefined) => ResponseHeader | undefined;

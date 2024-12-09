import type { ResponseHeader } from "../shared";
export type XSSProtectionOption = false | "sanitize" | "block-rendering" | ["report", {
    uri: string | URL;
}];
export declare const createXXSSProtectionHeaderValue: (option?: XSSProtectionOption, strictURIEncoder?: (uri: string | URL) => string) => string | undefined;
export declare const createXSSProtectionHeader: (option?: XSSProtectionOption, headerValueCreator?: (option?: XSSProtectionOption, strictURIEncoder?: (uri: string | URL) => string) => string | undefined) => ResponseHeader;

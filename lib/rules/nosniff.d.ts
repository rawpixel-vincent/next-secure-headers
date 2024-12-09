import type { ResponseHeader } from "../shared";
export type NosniffOption = false | "nosniff";
export declare const createXContentTypeOptionsHeaderValue: (option?: NosniffOption) => string | undefined;
export declare const createNosniffHeader: (option?: NosniffOption, headerValueCreator?: (option?: NosniffOption) => string | undefined) => ResponseHeader;

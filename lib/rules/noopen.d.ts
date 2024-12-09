import type { ResponseHeader } from "../shared";
export type NoopenOption = false | "noopen";
export declare const createXDownloadOptionsHeaderValue: (option?: NoopenOption) => string | undefined;
export declare const createNoopenHeader: (option?: NoopenOption, headerValueCreator?: (option?: NoopenOption) => string | undefined) => ResponseHeader;

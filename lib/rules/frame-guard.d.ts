import type { ResponseHeader } from "../shared";
export type FrameGuardOption = false | "deny" | "sameorigin" | ["allow-from", {
    uri: string | URL;
}];
export declare const createXFrameOptionsHeaderValue: (option?: FrameGuardOption, strictURIEncoder?: (uri: string | URL) => string) => string | undefined;
export declare const createFrameGuardHeader: (option?: FrameGuardOption, headerValueCreator?: (option?: FrameGuardOption, strictURIEncoder?: (uri: string | URL) => string) => string | undefined) => ResponseHeader;

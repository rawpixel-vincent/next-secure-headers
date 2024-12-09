import type { ResponseHeader } from "../shared";
declare const supportedValues: readonly ["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin"];
type SupportedValue = (typeof supportedValues)[number];
export type ReferrerPolicyOption = false | SupportedValue | SupportedValue[];
export declare const createReferrerPolicyHeaderValue: (option?: ReferrerPolicyOption) => string | undefined;
export declare const createReferrerPolicyHeader: (option?: ReferrerPolicyOption, headerValueCreator?: (option?: ReferrerPolicyOption) => string | undefined) => ResponseHeader | undefined;
export {};

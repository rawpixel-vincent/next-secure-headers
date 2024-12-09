"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContentSecurityPolicyHeader = exports.createContentSecurityPolicyOptionHeaderValue = exports.convertReportingDirectiveToString = exports.convertNavigationDirectiveToString = exports.convertDocumentDirectiveToString = exports.convertFetchDirectiveToString = exports.createDirectiveValue = exports.getProperHeaderName = void 0;
const shared_1 = require("./shared");
const headerName = "Content-Security-Policy";
const reportOnlyHeaderName = "Content-Security-Policy-Report-Only";
const directiveValueSepartor = "; ";
const getProperHeaderName = (reportOnly = false) => (reportOnly ? reportOnlyHeaderName : headerName);
exports.getProperHeaderName = getProperHeaderName;
const createDirectiveValue = (directiveName, value, arrayWrapper = shared_1.wrapArray) => {
    const values = arrayWrapper(value);
    return `${directiveName} ${values.join(" ")}`;
};
exports.createDirectiveValue = createDirectiveValue;
const fetchDirectiveNamesByKey = {
    childSrc: "child-src",
    "child-src": "child-src",
    connectSrc: "connect-src",
    "connect-src": "connect-src",
    defaultSrc: "default-src",
    "default-src": "default-src",
    fontSrc: "font-src",
    "font-src": "font-src",
    frameSrc: "frame-src",
    "frame-src": "frame-src",
    imgSrc: "img-src",
    "img-src": "img-src",
    manifestSrc: "manifest-src",
    "manifest-src": "manifest-src",
    mediaSrc: "media-src",
    "media-src": "media-src",
    prefetchSrc: "prefetch-src",
    "prefetch-src": "prefetch-src",
    objectSrc: "object-src",
    "object-src": "object-src",
    scriptSrc: "script-src",
    "script-src": "script-src",
    scriptSrcElem: "script-src-elem",
    "script-src-elem": "script-src-elem",
    scriptSrcAttr: "script-src-attr",
    "script-src-attr": "script-src-attr",
    styleSrc: "style-src",
    "style-src": "style-src",
    styleSrcElem: "style-src-elem",
    "style-src-elem": "style-src-elem",
    styleSrcAttr: "style-src-attr",
    "style-src-attr": "style-src-attr",
    workerSrc: "worker-src",
    "worker-src": "worker-src",
};
const convertFetchDirectiveToString = (directive) => {
    if (directive == undefined)
        return "";
    const strings = [];
    Object.entries(directive).forEach(([key, value]) => {
        if (value == undefined)
            return;
        const directiveName = fetchDirectiveNamesByKey[key];
        if (directiveName == undefined)
            return;
        strings.push((0, exports.createDirectiveValue)(directiveName, (0, shared_1.wrapArray)(value)));
    });
    return strings.join(directiveValueSepartor);
};
exports.convertFetchDirectiveToString = convertFetchDirectiveToString;
const convertDocumentDirectiveToString = (directive) => {
    var _a, _b;
    if (directive == undefined)
        return "";
    const strings = [];
    const baseURI = (_a = directive.baseURI) !== null && _a !== void 0 ? _a : directive["base-uri"];
    if (baseURI != undefined)
        strings.push((0, exports.createDirectiveValue)("base-uri", (0, shared_1.wrapArray)(baseURI)));
    const pluginTypes = (_b = directive.pluginTypes) !== null && _b !== void 0 ? _b : directive["plugin-types"];
    if (pluginTypes != undefined)
        strings.push((0, exports.createDirectiveValue)("plugin-types", (0, shared_1.wrapArray)(pluginTypes)));
    if (directive.sandbox != undefined) {
        const directiveName = "sandbox";
        const value = directive.sandbox === true ? directiveName : (0, exports.createDirectiveValue)(directiveName, directive.sandbox);
        strings.push(value);
    }
    return strings.join(directiveValueSepartor);
};
exports.convertDocumentDirectiveToString = convertDocumentDirectiveToString;
const convertNavigationDirectiveToString = (directive) => {
    var _a, _b, _c;
    if (directive == undefined)
        return "";
    const strings = [];
    const formAction = (_a = directive.formAction) !== null && _a !== void 0 ? _a : directive["form-action"];
    if (formAction != undefined)
        strings.push((0, exports.createDirectiveValue)("form-action", (0, shared_1.wrapArray)(formAction)));
    const frameAncestors = (_b = directive.frameAncestors) !== null && _b !== void 0 ? _b : directive["frame-ancestors"];
    if (frameAncestors != undefined)
        strings.push((0, exports.createDirectiveValue)("frame-ancestors", (0, shared_1.wrapArray)(frameAncestors)));
    const navigateTo = (_c = directive.navigateTo) !== null && _c !== void 0 ? _c : directive["navigate-to"];
    if (navigateTo != undefined)
        strings.push((0, exports.createDirectiveValue)("navigate-to", (0, shared_1.wrapArray)(navigateTo)));
    return strings.join(directiveValueSepartor);
};
exports.convertNavigationDirectiveToString = convertNavigationDirectiveToString;
const convertReportingDirectiveToString = (directive) => {
    var _a, _b;
    if (directive == undefined)
        return "";
    const strings = [];
    const reportURIValue = (_a = directive.reportURI) !== null && _a !== void 0 ? _a : directive["report-uri"];
    if (reportURIValue != undefined) {
        const reportURI = (0, shared_1.wrapArray)(reportURIValue);
        strings.push((0, exports.createDirectiveValue)("report-uri", reportURI));
    }
    const reportTo = (_b = directive.reportTo) !== null && _b !== void 0 ? _b : directive["report-to"];
    if (reportTo != undefined)
        strings.push((0, exports.createDirectiveValue)("report-to", reportTo));
    return strings.join(directiveValueSepartor);
};
exports.convertReportingDirectiveToString = convertReportingDirectiveToString;
const createContentSecurityPolicyOptionHeaderValue = (option, fetchDirectiveToStringConverter = exports.convertFetchDirectiveToString, documentDirectiveToStringConverter = exports.convertDocumentDirectiveToString, navigationDirectiveToStringConverter = exports.convertNavigationDirectiveToString, reportingDirectiveToStringConverter = exports.convertReportingDirectiveToString) => {
    if (option == undefined)
        return;
    if (option === false)
        return;
    return [
        fetchDirectiveToStringConverter(option.directives),
        documentDirectiveToStringConverter(option.directives),
        navigationDirectiveToStringConverter(option.directives),
        reportingDirectiveToStringConverter(option.directives),
    ]
        .filter((string) => string.length > 0)
        .join(directiveValueSepartor);
};
exports.createContentSecurityPolicyOptionHeaderValue = createContentSecurityPolicyOptionHeaderValue;
const createContentSecurityPolicyHeader = (option, properHeaderNameGetter = exports.getProperHeaderName, headerValueCreator = exports.createContentSecurityPolicyOptionHeaderValue) => {
    if (option == undefined)
        return;
    if (option === false)
        return;
    const headerName = properHeaderNameGetter(option.reportOnly);
    const value = headerValueCreator(option);
    return { name: headerName, value };
};
exports.createContentSecurityPolicyHeader = createContentSecurityPolicyHeader;

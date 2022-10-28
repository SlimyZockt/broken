"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split_fqdn = void 0;
let split_fqdn = (url) => {
    const URL_SEGMENTS = url.hostname.split(".");
    var domain = URL_SEGMENTS
        .filter((_, index) => index >= URL_SEGMENTS.length - 2)
        .join(".");
    var host = URL_SEGMENTS
        .filter((_, index) => index < URL_SEGMENTS.length - 2)
        .join(".");
    return [host, domain];
};
exports.split_fqdn = split_fqdn;

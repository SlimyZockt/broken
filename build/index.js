"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const split_fqdn_1 = require("./split_fqdn");
const app = (() => {
    console.log((0, split_fqdn_1.split_fqdn)(new URL("https://www.geeksforgeeks.org/javascript-anonymous-functions/")));
})();

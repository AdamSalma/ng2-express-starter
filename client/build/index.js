/// <reference path="../../typings/index.d.ts" />
"use strict";
var $ = require("jquery");
var test_1 = require("./test");
var test = new test_1.Test.Something("hello");
$('document').ready(function () {
    console.log('testing');
});

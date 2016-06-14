/// <reference path="../../typings/index.d.ts" />

import * as $ from "jquery";
import { Test }  from "./test";




var test = new Test.Something("hello");

$('document').ready(function(){
    console.log('testing');
});
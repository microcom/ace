/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;

var JavaScriptAngularHighlightRules = function() {
    this.$rules = new JavaScriptHighlightRules().getRules();
    
    // see: https://docs.angular.com
    var keyword = "angular|module|directive|service|provider|controller|config|filter|run";
    var keywordMapper = this.createKeywordMapper({
        "variable.language": 
            "$scope|$anchorScroll|$animate|$animateProvider|$cacheFactory|$compile|"    +
            "$controller|$controllerProvider|$document|$exceptionHandler|$filter|"      +
            "$filterProvider|$http|$httpBackend|$interpolate|$interpolateProvider|"     +
            "$interval|$locale|$location|$locationProvider|$log|$logProvider|$parse|"   +
            "$parseProvider|$q|$rootElement|$rootScope|$rootScopeProvider|$sce|"        +
            "$sceProvider|$sceDelegate|$templateCache|$timeout|$window|$injector"       +
            "$provide|$cookies|$cookieStore|$resource|$route|$routeProvider|"           +
            "$routeParams|$sanitize|$swipe",
        "keyword": keyword
    }, "text");
    
    // TODO: Unicode escape sequences
    var identifierReVar = new RegExp(/\$[a-z]*/);
    var identifierReKey = keyword;
    
    var newRuleVar = {
        token: keywordMapper,
        regex: identifierReVar
    };

    var newRuleKey = {
        token: keywordMapper,
        regex: identifierReKey
    };

    this.$rules.no_regex.unshift(newRuleVar);
    this.$rules.no_regex.unshift(newRuleKey);
};

oop.inherits(JavaScriptAngularHighlightRules, JavaScriptHighlightRules);

exports.JavaScriptAngularHighlightRules = JavaScriptAngularHighlightRules;
});


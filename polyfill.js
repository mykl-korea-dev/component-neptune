// forEach
// if ('NodeList' in window && !NodeList.prototype.forEach) {
//     console.info('polyfill for IE11');
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}


// css variable
/*!
 * css-var-polyfill.js - v1.0.0
 *
 * Copyright (c) 2018 Aaron Barker <http://aaronbarker.net>
 * Released under the MIT license
 *
 * Date: 2018-03-09
 */
let cssVarPoly = {
    init: function() {
        // first lets see if the browser supports CSS variables
        // No version of IE supports window.CSS.supports, so if that isn't supported in the first place we know CSS variables is not supported
        // Edge supports supports, so check for actual variable support
        if (window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)')) {
            // this browser does support variables, abort
            // console.log('your browser supports CSS variables, aborting and letting the native support handle things.');
            return;
        } else {
            // edge barfs on console statements if the console is not open... lame!
            console.log('no support for you! polyfill all (some of) the things!!');
            document.querySelector('body').classList.add('cssvars-polyfilled');
        }

        cssVarPoly.ratifiedVars = {};
        cssVarPoly.varsByBlock = {};
        cssVarPoly.oldCSS = {};

        // start things off
        cssVarPoly.findCSS();
        cssVarPoly.updateCSS();
    },

    // find all the css blocks, save off the content, and look for variables
    findCSS: function() {
        let styleBlocks = document.querySelectorAll('style:not(.inserted),link[rel="stylesheet"]');

        // we need to track the order of the style/link elements when we save off the CSS, set a counter
        let counter = 1;

        // loop through all CSS blocks looking for CSS variables being set
        [].forEach.call(styleBlocks, function(block) {
            // console.log(block.nodeName);
            let theCSS;
            if (block.nodeName === 'STYLE') {
                // console.log("style");
                theCSS = block.innerHTML;
                cssVarPoly.findSetters(theCSS, counter);
            } else if (block.nodeName === 'LINK') {
                // console.log("link");
                cssVarPoly.getLink(block.getAttribute('href'), counter, function(counter, request) {
                    cssVarPoly.findSetters(request.responseText, counter);
                    cssVarPoly.oldCSS[counter] = request.responseText;
                    cssVarPoly.updateCSS();
                });
                theCSS = '';
            }
            // save off the CSS to parse through again later. the value may be empty for links that are waiting for their ajax return, but this will maintain the order
            cssVarPoly.oldCSS[counter] = theCSS;
            counter++;
        });
    },

    // find all the "--variable: value" matches in a provided block of CSS and add them to the master list
    findSetters: function(theCSS, counter) {
        // console.log(theCSS);
        cssVarPoly.varsByBlock[counter] = theCSS.match(/(--.+:.+;)/g) || [];
    },

    // run through all the CSS blocks to update the variables and then inject on the page
    updateCSS: function() {
        // first lets loop through all the variables to make sure later vars trump earlier vars
        cssVarPoly.ratifySetters(cssVarPoly.varsByBlock);

        // loop through the css blocks (styles and links)
        for (let curCSSID in cssVarPoly.oldCSS) {
            // console.log("curCSS:",oldCSS[curCSSID]);
            let newCSS = cssVarPoly.replaceGetters(cssVarPoly.oldCSS[curCSSID], cssVarPoly.ratifiedVars);
            // put it back into the page
            // first check to see if this block exists already
            if (document.querySelector('#inserted' + curCSSID)) {
                // console.log("updating")
                document.querySelector('#inserted' + curCSSID).innerHTML = newCSS;
            } else {
                // console.log("adding");
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = newCSS;
                style.classList.add('inserted');
                style.id = 'inserted' + curCSSID;
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        };
    },

    // parse a provided block of CSS looking for a provided list of variables and replace the --var-name with the correct value
    replaceGetters: function(curCSS, varList) {
        // console.log(varList);
        for (let theVar in varList) {
            // console.log(theVar);
            // match the variable with the actual variable name
            let getterRegex = new RegExp('var\\(\\s*' + theVar + '\\s*\\)', 'g');
            // console.log(getterRegex);
            // console.log(curCSS);
            curCSS = curCSS.replace(getterRegex, varList[theVar]);

            // now check for any getters that are left that have fallbacks
            let getterRegex2 = new RegExp('var\\(\\s*.+\\s*,\\s*(.+)\\)', 'g');
            // console.log(getterRegex);
            // console.log(curCSS);
            let matches = curCSS.match(getterRegex2);
            if (matches) {
                // console.log("matches",matches);
                matches.forEach(function(match) {
                    // console.log(match.match(/var\(.+,\s*(.+)\)/))
                    // find the fallback within the getter
                    curCSS = curCSS.replace(match, match.match(/var\(.+,\s*(.+)\)/)[1]);
                });

            }

            // curCSS = curCSS.replace(getterRegex2,varList[theVar]);
        };
        // console.log(curCSS);
        return curCSS;
    },

    // determine the css variable name value pair and track the latest
    ratifySetters: function(varList) {
        // console.log("varList:",varList);
        // loop through each block in order, to maintain order specificity
        for (let curBlock in varList) {
            let curVars = varList[curBlock];
            // console.log("curVars:",curVars);
            // loop through each var in the block
            curVars.forEach(function(theVar) {
                // console.log(theVar);
                // split on the name value pair separator
                let matches = theVar.split(/:\s*/);
                // console.log(matches);
                // put it in an object based on the varName. Each time we do this it will override a previous use and so will always have the last set be the winner
                // 0 = the name, 1 = the value, strip off the ; if it is there
                cssVarPoly.ratifiedVars[matches[0]] = matches[1].replace(/;/, '');
            });
        };
        // console.log(ratifiedVars);
    },

    // get the CSS file (same domain for now)
    getLink: function(url, counter, success) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.overrideMimeType('text/css;');
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                // console.log(request.responseText);
                if (typeof success === 'function') {
                    success(counter, request);
                }
            } else {
                // We reached our target server, but it returned an error
                console.warn('an error was returned from:', url);
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            console.warn('we could not get anything from:', url);
        };

        request.send();
    }
};

cssVarPoly.init();
//
// // Array.from
// // Production steps of ECMA-262, Edition 6, 22.1.2.1
// if (!Array.from) {
//     Array.from = (function () {
//         var toStr = Object.prototype.toString;
//         var isCallable = function (fn) {
//             return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
//         };
//         var toInteger = function (value) {
//             var number = Number(value);
//             if (isNaN(number)) { return 0; }
//             if (number === 0 || !isFinite(number)) { return number; }
//             return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
//         };
//         var maxSafeInteger = Math.pow(2, 53) - 1;
//         var toLength = function (value) {
//             var len = toInteger(value);
//             return Math.min(Math.max(len, 0), maxSafeInteger);
//         };
//
//         // The length property of the from method is 1.
//         return function from(arrayLike/*, mapFn, thisArg */) {
//             // 1. Let C be the this value.
//             var C = this;
//
//             // 2. Let items be ToObject(arrayLike).
//             var items = Object(arrayLike);
//
//             // 3. ReturnIfAbrupt(items).
//             if (arrayLike == null) {
//                 throw new TypeError('Array.from requires an array-like object - not null or undefined');
//             }
//
//             // 4. If mapfn is undefined, then let mapping be false.
//             var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
//             var T;
//             if (typeof mapFn !== 'undefined') {
//                 // 5. else
//                 // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
//                 if (!isCallable(mapFn)) {
//                     throw new TypeError('Array.from: when provided, the second argument must be a function');
//                 }
//
//                 // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
//                 if (arguments.length > 2) {
//                     T = arguments[2];
//                 }
//             }
//
//             // 10. Let lenValue be Get(items, "length").
//             // 11. Let len be ToLength(lenValue).
//             var len = toLength(items.length);
//
//             // 13. If IsConstructor(C) is true, then
//             // 13. a. Let A be the result of calling the [[Construct]] internal method
//             // of C with an argument list containing the single item len.
//             // 14. a. Else, Let A be ArrayCreate(len).
//             var A = isCallable(C) ? Object(new C(len)) : new Array(len);
//
//             // 16. Let k be 0.
//             var k = 0;
//             // 17. Repeat, while k < len… (also steps a - h)
//             var kValue;
//             while (k < len) {
//                 kValue = items[k];
//                 if (mapFn) {
//                     A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
//                 } else {
//                     A[k] = kValue;
//                 }
//                 k += 1;
//             }
//             // 18. Let putStatus be Put(A, "length", len, true).
//             A.length = len;
//             // 20. Return A.
//             return A;
//         };
//     }());
// }

// composedPath
(function(E, d, w) {
    if(!E.composedPath) {
        E.composedPath = function() {
            if (this.path) {
                return this.path;
            }
            var target = this.target;

            this.path = [];
            while (target.parentNode !== null) {
                this.path.push(target);
                target = target.parentNode;
            }
            this.path.push(d, w);
            return this.path;
        }
    }
})(Event.prototype, document, window);

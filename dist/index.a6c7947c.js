// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8EXkr":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "26245bb2a6c7947c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"l5eIm":[function(require,module,exports) {
const lookup = require("country-code-lookup");
/*========================================================================
                        elements
=======================================================================*/ const body = document.querySelector("body");
const inputBoxId = document.querySelector("input");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const minMax = document.querySelector(".minMax");
const weather = document.querySelector(".weather");
console.log(weather);
/*========================================================================
                       funtions:
=======================================================================*/ async function getData(cityName) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ebd7b2e73b4cd4b0a7b5931e071e7688`);
    if (response.ok) return response.json();
    // alert("Please enter correct city name");
    throw new Error(`Failed to fetch weather`);
}
async function cityData(cityName) {
    getData(cityName).then((data)=>{
        console.log(data);
        const country = lookup.byFips(`${data.sys.country}`);
        console.log(country);
        city.innerHTML = `${data.name} , ${country.country}`;
        date.innerHTML = new Date().toUTCString().slice(0, -13);
        console.log(new Date().toUTCString());
        temp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&deg;`;
        minMax.innerHTML = ` ${Math.floor(data.main.temp_min - 273.15)} &deg;(min) - ${Math.floor(data.main.temp_max - 273.15)} &deg;c(max)`;
        weather.innerHTML = data.weather[0].main;
    }).catch((error)=>{
        alert("Please enter correct city name");
    });
}
// console.log(lookup.byFips("UK"));
// cityData("almora");
/*======================================================================
               addEvent listner:
======================================================================*/ // console.log(inputBoxId);
window.addEventListener("load", (event)=>{
    cityData("almora");
});
inputBoxId.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        console.log(inputBoxId.value);
        cityData(inputBoxId.value);
        inputBoxId.value = "";
    }
});

},{"country-code-lookup":"geJ4O"}],"geJ4O":[function(require,module,exports) {
module.exports.byFips = function(code) {
    return search('fips', code.toUpperCase());
};
module.exports.byIso = function(code) {
    if (!isNaN(parseInt(code))) return search('isoNo', code.toString());
    if (code.length === 2) return search('iso2', code.toUpperCase());
    if (code.length === 3) return search('iso3', code.toUpperCase());
    throw new Error('cannot determine ISO code type');
};
module.exports.byInternet = function(code) {
    return search('internet', code.toUpperCase());
};
module.exports.byCountry = function(country) {
    return search('country', country);
};
function search(field, code) {
    for(var i = 0; i < countries.length; i++){
        if (countries[i][field] === code) return countries[i];
    }
    return null;
}
var countries = [
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Afghanistan',
        capital: 'Kabul',
        fips: 'AF',
        iso2: 'AF',
        iso3: 'AFG',
        isoNo: '4',
        internet: 'AF'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Albania',
        capital: 'Tirana',
        fips: 'AL',
        iso2: 'AL',
        iso3: 'ALB',
        isoNo: '8',
        internet: 'AL'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Algeria',
        capital: 'Algiers',
        fips: 'AG',
        iso2: 'DZ',
        iso3: 'DZA',
        isoNo: '12',
        internet: 'DZ'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'American Samoa',
        capital: 'Pago Pago',
        fips: 'AQ',
        iso2: 'AS',
        iso3: 'ASM',
        isoNo: '16',
        internet: 'AS'
    },
    {
        continent: 'Europe',
        region: 'South West Europe',
        country: 'Andorra',
        capital: 'Andorra la Vella',
        fips: 'AN',
        iso2: 'AD',
        iso3: 'AND',
        isoNo: '20',
        internet: 'AD'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Angola',
        capital: 'Luanda',
        fips: 'AO',
        iso2: 'AO',
        iso3: 'AGO',
        isoNo: '24',
        internet: 'AO'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Anguilla',
        capital: 'The Valley',
        fips: 'AV',
        iso2: 'AI',
        iso3: 'AIA',
        isoNo: '660',
        internet: 'AI'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Antigua and Barbuda',
        capital: "Saint John's",
        fips: 'AC',
        iso2: 'AG',
        iso3: 'ATG',
        isoNo: '28',
        internet: 'AG'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Argentina',
        capital: 'Buenos Aires',
        fips: 'AR',
        iso2: 'AR',
        iso3: 'ARG',
        isoNo: '32',
        internet: 'AR'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Armenia',
        capital: 'Yerevan',
        fips: 'AM',
        iso2: 'AM',
        iso3: 'ARM',
        isoNo: '51',
        internet: 'AM'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Aruba',
        capital: 'Oranjestad',
        fips: 'AA',
        iso2: 'AW',
        iso3: 'ABW',
        isoNo: '533',
        internet: 'AW'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Australia',
        capital: 'Canberra',
        fips: 'AS',
        iso2: 'AU',
        iso3: 'AUS',
        isoNo: '36',
        internet: 'AU'
    },
    {
        continent: 'Europe',
        region: 'Central Europe',
        country: 'Austria',
        capital: 'Vienna',
        fips: 'AU',
        iso2: 'AT',
        iso3: 'AUT',
        isoNo: '40',
        internet: 'AT'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Azerbaijan',
        capital: 'Baku (Baki)',
        fips: 'AJ',
        iso2: 'AZ',
        iso3: 'AZE',
        isoNo: '31',
        internet: 'AZ'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'The Bahamas',
        capital: 'Nassau',
        fips: 'BF',
        iso2: 'BS',
        iso3: 'BHS',
        isoNo: '44',
        internet: 'BS'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Bahrain',
        capital: 'Manama',
        fips: 'BA',
        iso2: 'BH',
        iso3: 'BHR',
        isoNo: '48',
        internet: 'BH'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Bangladesh',
        capital: 'Dhaka',
        fips: 'BG',
        iso2: 'BD',
        iso3: 'BGD',
        isoNo: '50',
        internet: 'BD'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Barbados',
        capital: 'Bridgetown',
        fips: 'BB',
        iso2: 'BB',
        iso3: 'BRB',
        isoNo: '52',
        internet: 'BB'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Belarus',
        capital: 'Minsk',
        fips: 'BO',
        iso2: 'BY',
        iso3: 'BLR',
        isoNo: '112',
        internet: 'BY'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Belgium',
        capital: 'Brussels',
        fips: 'BE',
        iso2: 'BE',
        iso3: 'BEL',
        isoNo: '56',
        internet: 'BE'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Belize',
        capital: 'Belmopan',
        fips: 'BH',
        iso2: 'BZ',
        iso3: 'BLZ',
        isoNo: '84',
        internet: 'BZ'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Benin',
        capital: 'Porto-Novo��',
        fips: 'BN',
        iso2: 'BJ',
        iso3: 'BEN',
        isoNo: '204',
        internet: 'BJ'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Bermuda',
        capital: 'Hamilton',
        fips: 'BD',
        iso2: 'BM',
        iso3: 'BMU',
        isoNo: '60',
        internet: 'BM'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Bhutan',
        capital: 'Thimphu',
        fips: 'BT',
        iso2: 'BT',
        iso3: 'BTN',
        isoNo: '64',
        internet: 'BT'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Bolivia',
        capital: 'La Paz / Sucre',
        fips: 'BL',
        iso2: 'BO',
        iso3: 'BOL',
        isoNo: '68',
        internet: 'BO'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        fips: 'BK',
        iso2: 'BA',
        iso3: 'BIH',
        isoNo: '70',
        internet: 'BA'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Botswana',
        capital: 'Gaborone',
        fips: 'BC',
        iso2: 'BW',
        iso3: 'BWA',
        isoNo: '72',
        internet: 'BW'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Brazil',
        capital: 'Brasilia',
        fips: 'BR',
        iso2: 'BR',
        iso3: 'BRA',
        isoNo: '76',
        internet: 'BR'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'British Virgin Islands',
        capital: 'Road Town',
        fips: 'VI',
        iso2: 'VG',
        iso3: 'VGB',
        isoNo: '92',
        internet: 'VG'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Brunei',
        capital: 'Bandar Seri Begawan',
        fips: 'BX',
        iso2: 'BN',
        iso3: 'BRN',
        isoNo: '96',
        internet: 'BN'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Bulgaria',
        capital: 'Sofia',
        fips: 'BU',
        iso2: 'BG',
        iso3: 'BGR',
        isoNo: '100',
        internet: 'BG'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Burkina Faso',
        capital: 'Ouagadougou',
        fips: 'UV',
        iso2: 'BF',
        iso3: 'BFA',
        isoNo: '854',
        internet: 'BF'
    },
    {
        continent: 'Africa',
        region: 'Central Africa',
        country: 'Burundi',
        capital: 'Bujumbura',
        fips: 'BY',
        iso2: 'BI',
        iso3: 'BDI',
        isoNo: '108',
        internet: 'BI'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Cambodia',
        capital: 'Phnom Penh',
        fips: 'CB',
        iso2: 'KH',
        iso3: 'KHM',
        isoNo: '116',
        internet: 'KH'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Cameroon',
        capital: 'Yaounde',
        fips: 'CM',
        iso2: 'CM',
        iso3: 'CMR',
        isoNo: '120',
        internet: 'CM'
    },
    {
        continent: 'Americas',
        region: 'North America',
        country: 'Canada',
        capital: 'Ottawa',
        fips: 'CA',
        iso2: 'CA',
        iso3: 'CAN',
        isoNo: '124',
        internet: 'CA'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Cape Verde',
        capital: 'Praia',
        fips: 'CV',
        iso2: 'CV',
        iso3: 'CPV',
        isoNo: '132',
        internet: 'CV'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Cayman Islands',
        capital: 'George Town',
        fips: 'CJ',
        iso2: 'KY',
        iso3: 'CYM',
        isoNo: '136',
        internet: 'KY'
    },
    {
        continent: 'Africa',
        region: 'Central Africa',
        country: 'Central African Republic',
        capital: 'Bangui',
        fips: 'CT',
        iso2: 'CF',
        iso3: 'CAF',
        isoNo: '140',
        internet: 'CF'
    },
    {
        continent: 'Africa',
        region: 'Central Africa',
        country: 'Chad',
        capital: "N'Djamena",
        fips: 'CD',
        iso2: 'TD',
        iso3: 'TCD',
        isoNo: '148',
        internet: 'TD'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Chile',
        capital: 'Santiago',
        fips: 'CI',
        iso2: 'CL',
        iso3: 'CHL',
        isoNo: '152',
        internet: 'CL'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'China',
        capital: 'Beijing',
        fips: 'CH',
        iso2: 'CN',
        iso3: 'CHN',
        isoNo: '156',
        internet: 'CN'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Christmas Island',
        capital: 'The Settlement',
        fips: 'KT',
        iso2: 'CX',
        iso3: 'CXR',
        isoNo: '162',
        internet: 'CX'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        fips: 'CK',
        iso2: 'CC',
        iso3: 'CCK',
        isoNo: '166',
        internet: 'CC'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Colombia',
        capital: 'Bogota',
        fips: 'CO',
        iso2: 'CO',
        iso3: 'COL',
        isoNo: '170',
        internet: 'CO'
    },
    {
        continent: 'Africa',
        region: 'Indian Ocean',
        country: 'Comoros',
        capital: 'Moroni',
        fips: 'CN',
        iso2: 'KM',
        iso3: 'COM',
        isoNo: '174',
        internet: 'KM'
    },
    {
        continent: 'Africa',
        region: 'Central Africa',
        country: 'Republic of the Congo',
        capital: 'Brazzaville',
        fips: 'CF',
        iso2: 'CG',
        iso3: 'COG',
        isoNo: '178',
        internet: 'CG'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Cook Islands',
        capital: 'Avarua',
        fips: 'CW',
        iso2: 'CK',
        iso3: 'COK',
        isoNo: '184',
        internet: 'CK'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Costa Rica',
        capital: 'San Jose',
        fips: 'CS',
        iso2: 'CR',
        iso3: 'CRI',
        isoNo: '188',
        internet: 'CR'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: "Cote d'Ivoire",
        capital: 'Yamoussoukro',
        fips: 'IV',
        iso2: 'CI',
        iso3: 'CIV',
        isoNo: '384',
        internet: 'CI'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Croatia',
        capital: 'Zagreb',
        fips: 'HR',
        iso2: 'HR',
        iso3: 'HRV',
        isoNo: '191',
        internet: 'HR'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Cuba',
        capital: 'Havana',
        fips: 'CU',
        iso2: 'CU',
        iso3: 'CUB',
        isoNo: '192',
        internet: 'CU'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Cyprus',
        capital: 'Nicosia',
        fips: 'CY',
        iso2: 'CY',
        iso3: 'CYP',
        isoNo: '196',
        internet: 'CY'
    },
    {
        continent: 'Europe',
        region: 'Central Europe',
        country: 'Czech Republic',
        capital: 'Prague',
        fips: 'EZ',
        iso2: 'CZ',
        iso3: 'CZE',
        isoNo: '203',
        internet: 'CZ'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Denmark',
        capital: 'Copenhagen',
        fips: 'DA',
        iso2: 'DK',
        iso3: 'DNK',
        isoNo: '208',
        internet: 'DK'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Djibouti',
        capital: 'Djibouti',
        fips: 'DJ',
        iso2: 'DJ',
        iso3: 'DJI',
        isoNo: '262',
        internet: 'DJ'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Dominica',
        capital: 'Roseau',
        fips: 'DO',
        iso2: 'DM',
        iso3: 'DMA',
        isoNo: '212',
        internet: 'DM'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Dominican Republic',
        capital: 'Santo Domingo',
        fips: 'DR',
        iso2: 'DO',
        iso3: 'DOM',
        isoNo: '214',
        internet: 'DO'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Ecuador',
        capital: 'Quito',
        fips: 'EC',
        iso2: 'EC',
        iso3: 'ECU',
        isoNo: '218',
        internet: 'EC'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Egypt',
        capital: 'Cairo',
        fips: 'EG',
        iso2: 'EG',
        iso3: 'EGY',
        isoNo: '818',
        internet: 'EG'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'El Salvador',
        capital: 'San Salvador',
        fips: 'ES',
        iso2: 'SV',
        iso3: 'SLV',
        isoNo: '222',
        internet: 'SV'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Equatorial Guinea',
        capital: 'Malabo',
        fips: 'EK',
        iso2: 'GQ',
        iso3: 'GNQ',
        isoNo: '226',
        internet: 'GQ'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Eritrea',
        capital: 'Asmara',
        fips: 'ER',
        iso2: 'ER',
        iso3: 'ERI',
        isoNo: '232',
        internet: 'ER'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Estonia',
        capital: 'Tallinn',
        fips: 'EN',
        iso2: 'EE',
        iso3: 'EST',
        isoNo: '233',
        internet: 'EE'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Ethiopia',
        capital: 'Addis Ababa',
        fips: 'ET',
        iso2: 'ET',
        iso3: 'ETH',
        isoNo: '231',
        internet: 'ET'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Falkland Islands (Islas Malvinas)',
        capital: 'Stanley',
        fips: 'FA',
        iso2: 'FK',
        iso3: 'FLK',
        isoNo: '238',
        internet: 'FK'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Faroe Islands',
        capital: 'Torshavn',
        fips: 'FO',
        iso2: 'FO',
        iso3: 'FRO',
        isoNo: '234',
        internet: 'FO'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Fiji',
        capital: 'Suva',
        fips: 'FJ',
        iso2: 'FJ',
        iso3: 'FJI',
        isoNo: '242',
        internet: 'FJ'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Finland',
        capital: 'Helsinki',
        fips: 'FI',
        iso2: 'FI',
        iso3: 'FIN',
        isoNo: '246',
        internet: 'FI'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'France',
        capital: 'Paris',
        fips: 'FR',
        iso2: 'FR',
        iso3: 'FRA',
        isoNo: '250',
        internet: 'FR'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'French Guiana',
        capital: 'Cayenne',
        fips: 'FG',
        iso2: 'GF',
        iso3: 'GUF',
        isoNo: '254',
        internet: 'GF'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'French Polynesia',
        capital: 'Papeete',
        fips: 'FP',
        iso2: 'PF',
        iso3: 'PYF',
        isoNo: '258',
        internet: 'PF'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Gabon',
        capital: 'Libreville',
        fips: 'GB',
        iso2: 'GA',
        iso3: 'GAB',
        isoNo: '266',
        internet: 'GA'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'The Gambia',
        capital: 'Banjul',
        fips: 'GA',
        iso2: 'GM',
        iso3: 'GMB',
        isoNo: '270',
        internet: 'GM'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Georgia',
        capital: "T'bilisi",
        fips: 'GG',
        iso2: 'GE',
        iso3: 'GEO',
        isoNo: '268',
        internet: 'GE'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Germany',
        capital: 'Berlin',
        fips: 'GM',
        iso2: 'DE',
        iso3: 'DEU',
        isoNo: '276',
        internet: 'DE'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Ghana',
        capital: 'Accra',
        fips: 'GH',
        iso2: 'GH',
        iso3: 'GHA',
        isoNo: '288',
        internet: 'GH'
    },
    {
        continent: 'Europe',
        region: 'South West Europe',
        country: 'Gibraltar',
        capital: 'Gibraltar',
        fips: 'GI',
        iso2: 'GI',
        iso3: 'GIB',
        isoNo: '292',
        internet: 'GI'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Greece',
        capital: 'Athens',
        fips: 'GR',
        iso2: 'GR',
        iso3: 'GRC',
        isoNo: '300',
        internet: 'GR'
    },
    {
        continent: 'Americas',
        region: 'North America',
        country: 'Greenland',
        capital: 'Nuuk (Godthab)',
        fips: 'GL',
        iso2: 'GL',
        iso3: 'GRL',
        isoNo: '304',
        internet: 'GL'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Grenada',
        capital: "Saint George's",
        fips: 'GJ',
        iso2: 'GD',
        iso3: 'GRD',
        isoNo: '308',
        internet: 'GD'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Guadeloupe',
        capital: 'Basse-Terre',
        fips: 'GP',
        iso2: 'GP',
        iso3: 'GLP',
        isoNo: '312',
        internet: 'GP'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Guam',
        capital: 'Hagatna (Agana)',
        fips: 'GQ',
        iso2: 'GU',
        iso3: 'GUM',
        isoNo: '316',
        internet: 'GU'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Guatemala',
        capital: 'Guatemala',
        fips: 'GT',
        iso2: 'GT',
        iso3: 'GTM',
        isoNo: '320',
        internet: 'GT'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Guinea',
        capital: 'Conakry',
        fips: 'GV',
        iso2: 'GN',
        iso3: 'GIN',
        isoNo: '324',
        internet: 'GN'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Guinea-Bissau',
        capital: 'Bissau',
        fips: 'PU',
        iso2: 'GW',
        iso3: 'GNB',
        isoNo: '624',
        internet: 'GW'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Guyana',
        capital: 'Georgetown',
        fips: 'GY',
        iso2: 'GY',
        iso3: 'GUY',
        isoNo: '328',
        internet: 'GY'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Haiti',
        capital: 'Port-au-Prince',
        fips: 'HA',
        iso2: 'HT',
        iso3: 'HTI',
        isoNo: '332',
        internet: 'HT'
    },
    {
        continent: 'Europe',
        region: 'Southern Europe',
        country: 'Holy See (Vatican City)',
        capital: 'Vatican City',
        fips: 'VT',
        iso2: 'VA',
        iso3: 'VAT',
        isoNo: '336',
        internet: 'VA'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Honduras',
        capital: 'Tegucigalpa',
        fips: 'HO',
        iso2: 'HN',
        iso3: 'HND',
        isoNo: '340',
        internet: 'HN'
    },
    {
        continent: 'Europe',
        region: 'Central Europe',
        country: 'Hungary',
        capital: 'Budapest',
        fips: 'HU',
        iso2: 'HU',
        iso3: 'HUN',
        isoNo: '348',
        internet: 'HU'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Iceland',
        capital: 'Reykjavik',
        fips: 'IC',
        iso2: 'IS',
        iso3: 'ISL',
        isoNo: '352',
        internet: 'IS'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'India',
        capital: 'New Delhi',
        fips: 'IN',
        iso2: 'IN',
        iso3: 'IND',
        isoNo: '356',
        internet: 'IN'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Indonesia',
        capital: 'Jakarta',
        fips: 'ID',
        iso2: 'ID',
        iso3: 'IDN',
        isoNo: '360',
        internet: 'ID'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Iran',
        capital: 'Tehran',
        fips: 'IR',
        iso2: 'IR',
        iso3: 'IRN',
        isoNo: '364',
        internet: 'IR'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Iraq',
        capital: 'Baghdad',
        fips: 'IZ',
        iso2: 'IQ',
        iso3: 'IRQ',
        isoNo: '368',
        internet: 'IQ'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Ireland',
        capital: 'Dublin',
        fips: 'EI',
        iso2: 'IE',
        iso3: 'IRL',
        isoNo: '372',
        internet: 'IE'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Israel',
        capital: 'Jerusalem',
        fips: 'IS',
        iso2: 'IL',
        iso3: 'ISR',
        isoNo: '376',
        internet: 'IL'
    },
    {
        continent: 'Europe',
        region: 'Southern Europe',
        country: 'Italy',
        capital: 'Rome',
        fips: 'IT',
        iso2: 'IT',
        iso3: 'ITA',
        isoNo: '380',
        internet: 'IT'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Jamaica',
        capital: 'Kingston',
        fips: 'JM',
        iso2: 'JM',
        iso3: 'JAM',
        isoNo: '388',
        internet: 'JM'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'Japan',
        capital: 'Tokyo',
        fips: 'JA',
        iso2: 'JP',
        iso3: 'JPN',
        isoNo: '392',
        internet: 'JP'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Jordan',
        capital: 'Amman',
        fips: 'JO',
        iso2: 'JO',
        iso3: 'JOR',
        isoNo: '400',
        internet: 'JO'
    },
    {
        continent: 'Asia',
        region: 'Central Asia',
        country: 'Kazakhstan',
        capital: 'Astana (Akmola)',
        fips: 'KZ',
        iso2: 'KZ',
        iso3: 'KAZ',
        isoNo: '398',
        internet: 'KZ'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Kenya',
        capital: 'Nairobi',
        fips: 'KE',
        iso2: 'KE',
        iso3: 'KEN',
        isoNo: '404',
        internet: 'KE'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Kiribati',
        capital: 'Tarawa',
        fips: 'KR',
        iso2: 'KI',
        iso3: 'KIR',
        isoNo: '296',
        internet: 'KI'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'North Korea',
        capital: "P'yongyang",
        fips: 'KN',
        iso2: 'KP',
        iso3: 'PRK',
        isoNo: '408',
        internet: 'KP'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'South Korea',
        capital: 'Seoul',
        fips: 'KS',
        iso2: 'KR',
        iso3: 'KOR',
        isoNo: '410',
        internet: 'KR'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Kuwait',
        capital: 'Kuwait',
        fips: 'KU',
        iso2: 'KW',
        iso3: 'KWT',
        isoNo: '414',
        internet: 'KW'
    },
    {
        continent: 'Asia',
        region: 'Central Asia',
        country: 'Kyrgyzstan',
        capital: 'Bishkek',
        fips: 'KG',
        iso2: 'KG',
        iso3: 'KGZ',
        isoNo: '417',
        internet: 'KG'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Laos',
        capital: 'Vientiane',
        fips: 'LA',
        iso2: 'LA',
        iso3: 'LAO',
        isoNo: '418',
        internet: 'LA'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Latvia',
        capital: 'Riga',
        fips: 'LG',
        iso2: 'LV',
        iso3: 'LVA',
        isoNo: '428',
        internet: 'LV'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Lebanon',
        capital: 'Beirut',
        fips: 'LE',
        iso2: 'LB',
        iso3: 'LBN',
        isoNo: '422',
        internet: 'LB'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Lesotho',
        capital: 'Maseru',
        fips: 'LT',
        iso2: 'LS',
        iso3: 'LSO',
        isoNo: '426',
        internet: 'LS'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Liberia',
        capital: 'Monrovia',
        fips: 'LI',
        iso2: 'LR',
        iso3: 'LBR',
        isoNo: '430',
        internet: 'LR'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Libya',
        capital: 'Tripoli',
        fips: 'LY',
        iso2: 'LY',
        iso3: 'LBY',
        isoNo: '434',
        internet: 'LY'
    },
    {
        continent: 'Europe',
        region: 'Central Europe',
        country: 'Liechtenstein',
        capital: 'Vaduz',
        fips: 'LS',
        iso2: 'LI',
        iso3: 'LIE',
        isoNo: '438',
        internet: 'LI'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Lithuania',
        capital: 'Vilnius',
        fips: 'LH',
        iso2: 'LT',
        iso3: 'LTU',
        isoNo: '440',
        internet: 'LT'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Luxembourg',
        capital: 'Luxembourg',
        fips: 'LU',
        iso2: 'LU',
        iso3: 'LUX',
        isoNo: '442',
        internet: 'LU'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'North Macedonia',
        capital: 'Skopje',
        fips: 'MK',
        iso2: 'MK',
        iso3: 'MKD',
        isoNo: '807',
        internet: 'MK'
    },
    {
        continent: 'Africa',
        region: 'Indian Ocean',
        country: 'Madagascar',
        capital: 'Antananarivo',
        fips: 'MA',
        iso2: 'MG',
        iso3: 'MDG',
        isoNo: '450',
        internet: 'MG'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Malawi',
        capital: 'Lilongwe',
        fips: 'MI',
        iso2: 'MW',
        iso3: 'MWI',
        isoNo: '454',
        internet: 'MW'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Malaysia',
        capital: 'Kuala Lumpur',
        fips: 'MY',
        iso2: 'MY',
        iso3: 'MYS',
        isoNo: '458',
        internet: 'MY'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Maldives',
        capital: 'Male (Maale)',
        fips: 'MV',
        iso2: 'MV',
        iso3: 'MDV',
        isoNo: '462',
        internet: 'MV'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Mali',
        capital: 'Bamako',
        fips: 'ML',
        iso2: 'ML',
        iso3: 'MLI',
        isoNo: '466',
        internet: 'ML'
    },
    {
        continent: 'Europe',
        region: 'Southern Europe',
        country: 'Malta',
        capital: 'Valletta',
        fips: 'MT',
        iso2: 'MT',
        iso3: 'MLT',
        isoNo: '470',
        internet: 'MT'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Isle of Man',
        capital: 'Douglas',
        fips: 'IM',
        iso2: 'IM',
        iso3: 'IMN',
        isoNo: '833',
        internet: 'IM'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Marshall Islands',
        capital: 'Majuro',
        fips: 'RM',
        iso2: 'MH',
        iso3: 'MHL',
        isoNo: '584',
        internet: 'MH'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Martinique',
        capital: 'Fort-de-France',
        fips: 'MB',
        iso2: 'MQ',
        iso3: 'MTQ',
        isoNo: '474',
        internet: 'MQ'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Mauritania',
        capital: 'Nouakchott',
        fips: 'MR',
        iso2: 'MR',
        iso3: 'MRT',
        isoNo: '478',
        internet: 'MR'
    },
    {
        continent: 'Africa',
        region: 'Indian Ocean',
        country: 'Mauritius',
        capital: 'Port Louis',
        fips: 'MP',
        iso2: 'MU',
        iso3: 'MUS',
        isoNo: '480',
        internet: 'MU'
    },
    {
        continent: 'Africa',
        region: 'Indian Ocean',
        country: 'Mayotte',
        capital: 'Mamoutzou',
        fips: 'MF',
        iso2: 'YT',
        iso3: 'MYT',
        isoNo: '175',
        internet: 'YT'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Mexico',
        capital: 'Mexico',
        fips: 'MX',
        iso2: 'MX',
        iso3: 'MEX',
        isoNo: '484',
        internet: 'MX'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Federated States of Micronesia',
        capital: 'Palikir',
        fips: '',
        iso2: 'FM',
        iso3: 'FSM',
        isoNo: '583',
        internet: 'FM'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Moldova',
        capital: 'Chisinau',
        fips: 'MD',
        iso2: 'MD',
        iso3: 'MDA',
        isoNo: '498',
        internet: 'MD'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Monaco',
        capital: 'Monaco',
        fips: 'MN',
        iso2: 'MC',
        iso3: 'MCO',
        isoNo: '492',
        internet: 'MC'
    },
    {
        continent: 'Asia',
        region: 'Northern Asia',
        country: 'Mongolia',
        capital: 'Ulaanbaatar',
        fips: 'MG',
        iso2: 'MN',
        iso3: 'MNG',
        isoNo: '496',
        internet: 'MN'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Montserrat',
        capital: 'Plymouth',
        fips: 'MH',
        iso2: 'MS',
        iso3: 'MSR',
        isoNo: '500',
        internet: 'MS'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Morocco',
        capital: 'Rabat',
        fips: 'MO',
        iso2: 'MA',
        iso3: 'MAR',
        isoNo: '504',
        internet: 'MA'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Mozambique',
        capital: 'Maputo',
        fips: 'MZ',
        iso2: 'MZ',
        iso3: 'MOZ',
        isoNo: '508',
        internet: 'MZ'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Myanmar (Burma)',
        capital: 'Rangoon (Yangon)',
        fips: 'BM',
        iso2: 'MM',
        iso3: 'MMR',
        isoNo: '104',
        internet: 'MM'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Namibia',
        capital: 'Windhoek',
        fips: 'WA',
        iso2: 'NA',
        iso3: 'NAM',
        isoNo: '516',
        internet: 'NA'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Nauru',
        capital: 'no official capital',
        fips: 'NR',
        iso2: 'NR',
        iso3: 'NRU',
        isoNo: '520',
        internet: 'NR'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Nepal',
        capital: 'Kathmandu',
        fips: 'NP',
        iso2: 'NP',
        iso3: 'NPL',
        isoNo: '524',
        internet: 'NP'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Netherlands',
        capital: 'Amsterdam',
        fips: 'NL',
        iso2: 'NL',
        iso3: 'NLD',
        isoNo: '528',
        internet: 'NL'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Netherlands Antilles',
        capital: 'Willemstad',
        fips: 'NT',
        iso2: 'AN',
        iso3: 'ANT',
        isoNo: '530',
        internet: 'AN'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'New Caledonia',
        capital: 'Noumea',
        fips: 'NC',
        iso2: 'NC',
        iso3: 'NCL',
        isoNo: '540',
        internet: 'NC'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'New Zealand',
        capital: 'Wellington',
        fips: 'NZ',
        iso2: 'NZ',
        iso3: 'NZL',
        isoNo: '554',
        internet: 'NZ'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Nicaragua',
        capital: 'Managua',
        fips: 'NU',
        iso2: 'NI',
        iso3: 'NIC',
        isoNo: '558',
        internet: 'NI'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Niger',
        capital: 'Niamey',
        fips: 'NG',
        iso2: 'NE',
        iso3: 'NER',
        isoNo: '562',
        internet: 'NE'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Nigeria',
        capital: 'Abuja',
        fips: 'NI',
        iso2: 'NG',
        iso3: 'NGA',
        isoNo: '566',
        internet: 'NG'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Niue',
        capital: 'Alofi',
        fips: 'NE',
        iso2: 'NU',
        iso3: 'NIU',
        isoNo: '570',
        internet: 'NU'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Norfolk Island',
        capital: 'Kingston',
        fips: 'NF',
        iso2: 'NF',
        iso3: 'NFK',
        isoNo: '574',
        internet: 'NF'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Northern Mariana Islands',
        capital: 'Saipan',
        fips: 'CQ',
        iso2: 'MP',
        iso3: 'MNP',
        isoNo: '580',
        internet: 'MP'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Norway',
        capital: 'Oslo',
        fips: 'NO',
        iso2: 'NO',
        iso3: 'NOR',
        isoNo: '578',
        internet: 'NO'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Oman',
        capital: 'Muscat',
        fips: 'MU',
        iso2: 'OM',
        iso3: 'OMN',
        isoNo: '512',
        internet: 'OM'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Pakistan',
        capital: 'Islamabad',
        fips: 'PK',
        iso2: 'PK',
        iso3: 'PAK',
        isoNo: '586',
        internet: 'PK'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Palau',
        capital: 'Koror',
        fips: 'PS',
        iso2: 'PW',
        iso3: 'PLW',
        isoNo: '585',
        internet: 'PW'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Palestinian Territory',
        capital: 'East Jerusalem',
        fips: 'WE',
        iso2: 'PS',
        iso3: 'PSE',
        isoNo: '275',
        internet: 'PS'
    },
    {
        continent: 'Americas',
        region: 'Central America',
        country: 'Panama',
        capital: 'Panama',
        fips: 'PM',
        iso2: 'PA',
        iso3: 'PAN',
        isoNo: '591',
        internet: 'PA'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Papua New Guinea',
        capital: 'Port Moresby',
        fips: 'PP',
        iso2: 'PG',
        iso3: 'PNG',
        isoNo: '598',
        internet: 'PG'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Paraguay',
        capital: 'Asuncion',
        fips: 'PA',
        iso2: 'PY',
        iso3: 'PRY',
        isoNo: '600',
        internet: 'PY'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Peru',
        capital: 'Lima',
        fips: 'PE',
        iso2: 'PE',
        iso3: 'PER',
        isoNo: '604',
        internet: 'PE'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Philippines',
        capital: 'Manila',
        fips: 'RP',
        iso2: 'PH',
        iso3: 'PHL',
        isoNo: '608',
        internet: 'PH'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Pitcairn Islands',
        capital: 'Adamstown',
        fips: 'PC',
        iso2: 'PN',
        iso3: 'PCN',
        isoNo: '612',
        internet: 'PN'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Poland',
        capital: 'Warsaw',
        fips: 'PL',
        iso2: 'PL',
        iso3: 'POL',
        isoNo: '616',
        internet: 'PL'
    },
    {
        continent: 'Europe',
        region: 'South West Europe',
        country: 'Portugal',
        capital: 'Lisbon',
        fips: 'PO',
        iso2: 'PT',
        iso3: 'PRT',
        isoNo: '620',
        internet: 'PT'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Puerto Rico',
        capital: 'San Juan',
        fips: 'RQ',
        iso2: 'PR',
        iso3: 'PRI',
        isoNo: '630',
        internet: 'PR'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Qatar',
        capital: 'Doha',
        fips: 'QA',
        iso2: 'QA',
        iso3: 'QAT',
        isoNo: '634',
        internet: 'QA'
    },
    {
        continent: 'Africa',
        region: 'Indian Ocean',
        country: 'Reunion',
        capital: 'Saint-Denis',
        fips: 'RE',
        iso2: 'RE',
        iso3: 'REU',
        isoNo: '638',
        internet: 'RE'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Romania',
        capital: 'Bucharest',
        fips: 'RO',
        iso2: 'RO',
        iso3: 'ROU',
        isoNo: '642',
        internet: 'RO'
    },
    {
        continent: 'Asia',
        region: 'Northern Asia',
        country: 'Russia',
        capital: 'Moscow',
        fips: 'RS',
        iso2: 'RU',
        iso3: 'RUS',
        isoNo: '643',
        internet: 'RU'
    },
    {
        continent: 'Africa',
        region: 'Central Africa',
        country: 'Rwanda',
        capital: 'Kigali',
        fips: 'RW',
        iso2: 'RW',
        iso3: 'RWA',
        isoNo: '646',
        internet: 'RW'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        fips: 'SC',
        iso2: 'KN',
        iso3: 'KNA',
        isoNo: '659',
        internet: 'KN'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Saint Lucia',
        capital: 'Castries',
        fips: 'ST',
        iso2: 'LC',
        iso3: 'LCA',
        isoNo: '662',
        internet: 'LC'
    },
    {
        continent: 'Americas',
        region: 'North America',
        country: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        fips: 'SB',
        iso2: 'PM',
        iso3: 'SPM',
        isoNo: '666',
        internet: 'PM'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        fips: 'VC',
        iso2: 'VC',
        iso3: 'VCT',
        isoNo: '670',
        internet: 'VC'
    },
    {
        continent: 'Europe',
        region: 'Southern Europe',
        country: 'San Marino',
        capital: 'San Marino',
        fips: 'SM',
        iso2: 'SM',
        iso3: 'SMR',
        isoNo: '674',
        internet: 'SM'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Sao Tome and Principe',
        capital: 'Sao Tome',
        fips: 'TP',
        iso2: 'ST',
        iso3: 'STP',
        isoNo: '678',
        internet: 'ST'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Saudi Arabia',
        capital: 'Riyadh',
        fips: 'SA',
        iso2: 'SA',
        iso3: 'SAU',
        isoNo: '682',
        internet: 'SA'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Senegal',
        capital: 'Dakar',
        fips: 'SG',
        iso2: 'SN',
        iso3: 'SEN',
        isoNo: '686',
        internet: 'SN'
    },
    {
        continent: 'Africa',
        region: 'Indian Ocean',
        country: 'Seychelles',
        capital: 'Victoria',
        fips: 'SE',
        iso2: 'SC',
        iso3: 'SYC',
        isoNo: '690',
        internet: 'SC'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Sierra Leone',
        capital: 'Freetown',
        fips: 'SL',
        iso2: 'SL',
        iso3: 'SLE',
        isoNo: '694',
        internet: 'SL'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Singapore',
        capital: 'Singapore',
        fips: 'SN',
        iso2: 'SG',
        iso3: 'SGP',
        isoNo: '702',
        internet: 'SG'
    },
    {
        continent: 'Europe',
        region: 'Central Europe',
        country: 'Slovakia',
        capital: 'Bratislava',
        fips: 'LO',
        iso2: 'SK',
        iso3: 'SVK',
        isoNo: '703',
        internet: 'SK'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Slovenia',
        capital: 'Ljubljana',
        fips: 'SI',
        iso2: 'SI',
        iso3: 'SVN',
        isoNo: '705',
        internet: 'SI'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Solomon Islands',
        capital: 'Honiara',
        fips: 'BP',
        iso2: 'SB',
        iso3: 'SLB',
        isoNo: '90',
        internet: 'SB'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Somalia',
        capital: 'Mogadishu',
        fips: 'SO',
        iso2: 'SO',
        iso3: 'SOM',
        isoNo: '706',
        internet: 'SO'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'South Africa',
        capital: 'Pretoria��',
        fips: 'SF',
        iso2: 'ZA',
        iso3: 'ZAF',
        isoNo: '710',
        internet: 'ZA'
    },
    {
        continent: 'Europe',
        region: 'South West Europe',
        country: 'Spain',
        capital: 'Madrid',
        fips: 'SP',
        iso2: 'ES',
        iso3: 'ESP',
        isoNo: '724',
        internet: 'ES'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'Sri Lanka',
        capital: 'Colombo',
        fips: 'CE',
        iso2: 'LK',
        iso3: 'LKA',
        isoNo: '144',
        internet: 'LK'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Sudan',
        capital: 'Khartoum',
        fips: 'SU',
        iso2: 'SD',
        iso3: 'SDN',
        isoNo: '736',
        internet: 'SD'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Suriname',
        capital: 'Paramaribo',
        fips: 'NS',
        iso2: 'SR',
        iso3: 'SUR',
        isoNo: '740',
        internet: 'SR'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Svalbard',
        capital: 'Longyearbyen',
        fips: 'SV',
        iso2: 'SJ',
        iso3: 'SJM',
        isoNo: '744',
        internet: 'SJ'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Eswatini',
        capital: 'Mbabane',
        fips: 'WZ',
        iso2: 'SZ',
        iso3: 'SWZ',
        isoNo: '748',
        internet: 'SZ'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Sweden',
        capital: 'Stockholm',
        fips: 'SW',
        iso2: 'SE',
        iso3: 'SWE',
        isoNo: '752',
        internet: 'SE'
    },
    {
        continent: 'Europe',
        region: 'Central Europe',
        country: 'Switzerland',
        capital: 'Bern',
        fips: 'SZ',
        iso2: 'CH',
        iso3: 'CHE',
        isoNo: '756',
        internet: 'CH'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Syria',
        capital: 'Damascus',
        fips: 'SY',
        iso2: 'SY',
        iso3: 'SYR',
        isoNo: '760',
        internet: 'SY'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'Taiwan',
        capital: 'Taipei',
        fips: 'TW',
        iso2: 'TW',
        iso3: 'TWN',
        isoNo: '158',
        internet: 'TW'
    },
    {
        continent: 'Asia',
        region: 'Central Asia',
        country: 'Tajikistan',
        capital: 'Dushanbe',
        fips: 'TI',
        iso2: 'TJ',
        iso3: 'TJK',
        isoNo: '762',
        internet: 'TJ'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Tanzania',
        capital: 'Dar es Salaam',
        fips: 'TZ',
        iso2: 'TZ',
        iso3: 'TZA',
        isoNo: '834',
        internet: 'TZ'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Thailand',
        capital: 'Bangkok',
        fips: 'TH',
        iso2: 'TH',
        iso3: 'THA',
        isoNo: '764',
        internet: 'TH'
    },
    {
        continent: 'Africa',
        region: 'Western Africa',
        country: 'Togo',
        capital: 'Lome',
        fips: 'TO',
        iso2: 'TG',
        iso3: 'TGO',
        isoNo: '768',
        internet: 'TG'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Tokelau',
        capital: 'none',
        fips: 'TL',
        iso2: 'TK',
        iso3: 'TKL',
        isoNo: '772',
        internet: 'TK'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Tonga',
        capital: "Nuku'alofa",
        fips: 'TN',
        iso2: 'TO',
        iso3: 'TON',
        isoNo: '776',
        internet: 'TO'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Trinidad and Tobago',
        capital: 'Port-of-Spain',
        fips: 'TD',
        iso2: 'TT',
        iso3: 'TTO',
        isoNo: '780',
        internet: 'TT'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Tunisia',
        capital: 'Tunis',
        fips: 'TS',
        iso2: 'TN',
        iso3: 'TUN',
        isoNo: '788',
        internet: 'TN'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Turkey',
        capital: 'Ankara',
        fips: 'TU',
        iso2: 'TR',
        iso3: 'TUR',
        isoNo: '792',
        internet: 'TR'
    },
    {
        continent: 'Asia',
        region: 'Central Asia',
        country: 'Turkmenistan',
        capital: 'Ashgabat',
        fips: 'TX',
        iso2: 'TM',
        iso3: 'TKM',
        isoNo: '795',
        internet: 'TM'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Turks and Caicos Islands',
        capital: 'Grand Turk',
        fips: 'TK',
        iso2: 'TC',
        iso3: 'TCA',
        isoNo: '796',
        internet: 'TC'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Tuvalu',
        capital: 'Funafuti',
        fips: 'TV',
        iso2: 'TV',
        iso3: 'TUV',
        isoNo: '798',
        internet: 'TV'
    },
    {
        continent: 'Africa',
        region: 'Eastern Africa',
        country: 'Uganda',
        capital: 'Kampala',
        fips: 'UG',
        iso2: 'UG',
        iso3: 'UGA',
        isoNo: '800',
        internet: 'UG'
    },
    {
        continent: 'Europe',
        region: 'Eastern Europe',
        country: 'Ukraine',
        capital: 'Kiev',
        fips: 'UP',
        iso2: 'UA',
        iso3: 'UKR',
        isoNo: '804',
        internet: 'UA'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        fips: 'TC',
        iso2: 'AE',
        iso3: 'ARE',
        isoNo: '784',
        internet: 'AE'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'United Kingdom',
        capital: 'London',
        fips: 'UK',
        iso2: 'GB',
        iso3: 'GBR',
        isoNo: '826',
        internet: 'UK'
    },
    {
        continent: 'Americas',
        region: 'North America',
        country: 'United States',
        capital: 'Washington DC',
        fips: 'US',
        iso2: 'US',
        iso3: 'USA',
        isoNo: '840',
        internet: 'US'
    },
    {
        continent: 'Americas',
        region: 'North America',
        country: 'United States Minor Outlying Islands',
        capital: 'Washington DC',
        fips: '',
        iso2: 'UM',
        iso3: 'UMI',
        isoNo: '581',
        internet: 'US'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Uruguay',
        capital: 'Montevideo',
        fips: 'UY',
        iso2: 'UY',
        iso3: 'URY',
        isoNo: '858',
        internet: 'UY'
    },
    {
        continent: 'Asia',
        region: 'Central Asia',
        country: 'Uzbekistan',
        capital: 'Tashkent (Toshkent)',
        fips: 'UZ',
        iso2: 'UZ',
        iso3: 'UZB',
        isoNo: '860',
        internet: 'UZ'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Vanuatu',
        capital: 'Port-Vila',
        fips: 'NH',
        iso2: 'VU',
        iso3: 'VUT',
        isoNo: '548',
        internet: 'VU'
    },
    {
        continent: 'Americas',
        region: 'South America',
        country: 'Venezuela',
        capital: 'Caracas',
        fips: 'VE',
        iso2: 'VE',
        iso3: 'VEN',
        isoNo: '862',
        internet: 'UE'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Vietnam',
        capital: 'Hanoi',
        fips: 'VN',
        iso2: 'VN',
        iso3: 'VNM',
        isoNo: '704',
        internet: 'VN'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Virgin Islands',
        capital: 'Charlotte Amalie',
        fips: 'VQ',
        iso2: 'VI',
        iso3: 'VIR',
        isoNo: '850',
        internet: 'VI'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Wallis and Futuna',
        capital: 'Mata-Utu (on Ile Uvea)',
        fips: 'WF',
        iso2: 'WF',
        iso3: 'WLF',
        isoNo: '876',
        internet: 'WF'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'Western Sahara',
        capital: 'none',
        fips: 'WI',
        iso2: 'EH',
        iso3: 'ESH',
        isoNo: '732',
        internet: 'EH'
    },
    {
        continent: 'Oceania',
        region: 'Pacific',
        country: 'Western Samoa',
        capital: 'Apia',
        fips: 'WS',
        iso2: 'WS',
        iso3: 'WSM',
        isoNo: '882',
        internet: 'WS'
    },
    {
        continent: 'Asia',
        region: 'South West Asia',
        country: 'Yemen',
        capital: 'Sanaa',
        fips: 'YM',
        iso2: 'YE',
        iso3: 'YEM',
        isoNo: '887',
        internet: 'YE'
    },
    {
        continent: 'Africa',
        region: 'Central Africa',
        country: 'Democratic Republic of the Congo',
        capital: 'Kinshasa',
        fips: 'CG',
        iso2: 'CD',
        iso3: 'COD',
        isoNo: '180',
        internet: 'ZR'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Zambia',
        capital: 'Lusaka',
        fips: 'ZA',
        iso2: 'ZM',
        iso3: 'ZMB',
        isoNo: '894',
        internet: 'ZM'
    },
    {
        continent: 'Africa',
        region: 'Southern Africa',
        country: 'Zimbabwe',
        capital: 'Harare',
        fips: 'ZI',
        iso2: 'ZW',
        iso3: 'ZWE',
        isoNo: '716',
        internet: 'ZW'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'Hong Kong',
        capital: 'Victoria',
        fips: 'HK',
        iso2: 'HK',
        iso3: 'HKG',
        isoNo: '344',
        internet: 'HK'
    },
    {
        continent: 'Asia',
        region: 'East Asia',
        country: 'Macau',
        capital: 'Macau',
        fips: 'MC',
        iso2: 'MO',
        iso3: 'MAC',
        isoNo: '446',
        internet: 'MO'
    },
    {
        continent: 'Antarctica',
        region: 'Antarctica',
        country: 'Antarctica',
        capital: '',
        fips: 'AY',
        iso2: 'AQ',
        iso3: 'ATA',
        isoNo: '10',
        internet: 'AQ'
    },
    {
        continent: 'Atlantic Ocean',
        region: 'South Atlantic Ocean',
        country: 'Bouvet Island',
        capital: '',
        fips: 'BV',
        iso2: 'BV',
        iso3: 'BVT',
        isoNo: '74',
        internet: 'BV'
    },
    {
        continent: 'Asia',
        region: 'South Asia',
        country: 'British Indian Ocean Territory',
        capital: '',
        fips: 'IO',
        iso2: 'IO',
        iso3: 'IOT',
        isoNo: '86',
        internet: 'IO'
    },
    {
        continent: 'Indian Ocean',
        region: 'Southern Indian Ocean',
        country: 'French Southern and Antarctic Lands',
        capital: '',
        fips: 'FS',
        iso2: 'TF',
        iso3: 'ATF',
        isoNo: '260',
        internet: '--'
    },
    {
        continent: 'Indian Ocean',
        region: 'Southern Indian Ocean',
        country: 'Heard Island and McDonald Islands',
        capital: '',
        fips: 'HM',
        iso2: 'HM',
        iso3: 'HMD',
        isoNo: '334',
        internet: 'HM'
    },
    {
        continent: 'Atlantic Ocean',
        region: 'South Atlantic Ocean',
        country: 'Saint Helena',
        capital: '',
        fips: 'SH',
        iso2: 'SH',
        iso3: 'SHN',
        isoNo: '654',
        internet: 'SH'
    },
    {
        continent: 'Atlantic Ocean',
        region: 'South Atlantic Ocean',
        country: 'South Georgia and the South Sandwich Islands',
        capital: '',
        fips: 'SX',
        iso2: 'GS',
        iso3: 'SGS',
        isoNo: '239',
        internet: 'GS'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Guernsey',
        capital: 'Saint Peter Port',
        fips: 'GK',
        iso2: 'GG',
        iso3: 'GGY',
        isoNo: '831',
        internet: 'GG'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Serbia',
        capital: 'Belgrade',
        fips: 'RI',
        iso2: 'RS',
        iso3: 'SRB',
        isoNo: '688',
        internet: 'RS'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Saint Barthélemy',
        capital: 'Gustavia',
        fips: 'TB',
        iso2: 'BL',
        iso3: 'BLM',
        isoNo: '652',
        internet: 'BL'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Montenegro',
        capital: 'Podgorica',
        fips: 'MJ',
        iso2: 'ME',
        iso3: 'MNE',
        isoNo: '499',
        internet: 'ME'
    },
    {
        continent: 'Europe',
        region: 'Western Europe',
        country: 'Jersey',
        capital: 'Saint Helier',
        fips: 'JE',
        iso2: 'JE',
        iso3: 'JEY',
        isoNo: '832',
        internet: 'JE'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Curaçao',
        capital: 'Willemstad',
        fips: 'UC',
        iso2: 'CW',
        iso3: 'CUW',
        isoNo: '531',
        internet: 'CW'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Saint Martin',
        capital: 'Marigot',
        fips: 'RN',
        iso2: 'MF',
        iso3: 'MAF',
        isoNo: '663',
        internet: 'MF'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Sint Maarten',
        capital: 'Philipsburg',
        fips: 'NN',
        iso2: 'SX',
        iso3: 'SXM',
        isoNo: '534',
        internet: 'SX'
    },
    {
        continent: 'Asia',
        region: 'South East Asia',
        country: 'Timor-Leste',
        capital: 'Dili',
        fips: 'TT',
        iso2: 'TL',
        iso3: 'TLS',
        isoNo: '626',
        internet: 'TL'
    },
    {
        continent: 'Africa',
        region: 'Northern Africa',
        country: 'South Sudan',
        capital: 'Juba',
        fips: 'OD',
        iso2: 'SS',
        iso3: 'SSD',
        isoNo: '728',
        internet: 'SS'
    },
    {
        continent: 'Europe',
        region: 'Northern Europe',
        country: 'Åland Islands',
        capital: 'Mariehamn',
        fips: 'AX',
        iso2: 'AX',
        iso3: 'ALA',
        isoNo: '248',
        internet: 'AX'
    },
    {
        continent: 'Americas',
        region: 'West Indies',
        country: 'Bonaire',
        capital: 'Kralendijk',
        fips: 'BQ',
        iso2: 'BQ',
        iso3: 'BES',
        isoNo: '535',
        internet: 'BQ'
    },
    {
        continent: 'Europe',
        region: 'South East Europe',
        country: 'Republic of Kosovo',
        capital: 'Pristina',
        fips: 'KV',
        iso2: 'XK',
        iso3: 'UNK',
        isoNo: null,
        internet: 'XK'
    }, 
];
module.exports.countries = countries // console.log(module.byFips("UK"));
;

},{}]},["8EXkr","l5eIm"], "l5eIm", "parcelRequire1e02")

//# sourceMappingURL=index.a6c7947c.js.map

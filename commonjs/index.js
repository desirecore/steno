"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Writer = void 0;
var _promises = require("node:fs/promises");
var _nodePath = require("node:path");
var _nodeUrl = require("node:url");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Returns a temporary file
// Example: for /some/file will return /some/.file.tmp
function getTempFilename(file) {
  var f = file instanceof URL ? (0, _nodeUrl.fileURLToPath)(file) : file.toString();
  return (0, _nodePath.join)((0, _nodePath.dirname)(f), ".".concat((0, _nodePath.basename)(f), ".tmp"));
}
// Retries an asynchronous operation with a delay between retries and a maximum retry count
function retryAsyncOperation(_x, _x2, _x3) {
  return _retryAsyncOperation.apply(this, arguments);
}
function _retryAsyncOperation() {
  _retryAsyncOperation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fn, maxRetries, delayMs) {
    var i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          i = 0;
        case 1:
          if (!(i < maxRetries)) {
            _context2.next = 19;
            break;
          }
          _context2.prev = 2;
          _context2.next = 5;
          return fn();
        case 5:
          return _context2.abrupt("return", _context2.sent);
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          if (!(i < maxRetries - 1)) {
            _context2.next = 15;
            break;
          }
          _context2.next = 13;
          return new Promise(function (resolve) {
            return setTimeout(resolve, delayMs);
          });
        case 13:
          _context2.next = 16;
          break;
        case 15:
          throw _context2.t0;
        case 16:
          i++;
          _context2.next = 1;
          break;
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return _retryAsyncOperation.apply(this, arguments);
}
var _filename = /*#__PURE__*/new WeakMap();
var _tempFilename = /*#__PURE__*/new WeakMap();
var _locked = /*#__PURE__*/new WeakMap();
var _prev = /*#__PURE__*/new WeakMap();
var _next2 = /*#__PURE__*/new WeakMap();
var _nextPromise = /*#__PURE__*/new WeakMap();
var _nextData = /*#__PURE__*/new WeakMap();
var _Writer_brand = /*#__PURE__*/new WeakSet();
var Writer = exports.Writer = /*#__PURE__*/function () {
  function Writer(filename) {
    _classCallCheck(this, Writer);
    // File is locked, add data for later
    _classPrivateMethodInitSpec(this, _Writer_brand);
    _classPrivateFieldInitSpec(this, _filename, void 0);
    _classPrivateFieldInitSpec(this, _tempFilename, void 0);
    _classPrivateFieldInitSpec(this, _locked, false);
    _classPrivateFieldInitSpec(this, _prev, null);
    _classPrivateFieldInitSpec(this, _next2, null);
    _classPrivateFieldInitSpec(this, _nextPromise, null);
    _classPrivateFieldInitSpec(this, _nextData, null);
    _classPrivateFieldSet(_filename, this, filename);
    _classPrivateFieldSet(_tempFilename, this, getTempFilename(filename));
  }
  return _createClass(Writer, [{
    key: "write",
    value: function () {
      var _write2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _classPrivateFieldGet(_locked, this) ? _assertClassBrand(_Writer_brand, this, _add).call(this, data) : _assertClassBrand(_Writer_brand, this, _write).call(this, data));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function write(_x4) {
        return _write2.apply(this, arguments);
      }
      return write;
    }()
  }]);
}();
function _add(data) {
  var _this = this;
  // Only keep most recent data
  _classPrivateFieldSet(_nextData, this, data);
  // Create a singleton promise to resolve all next promises once next data is written
  _classPrivateFieldGet(_nextPromise, this) || _classPrivateFieldSet(_nextPromise, this, new Promise(function (resolve, reject) {
    _classPrivateFieldSet(_next2, _this, [resolve, reject]);
  }));
  // Return a promise that will resolve at the same time as next promise
  return new Promise(function (resolve, reject) {
    var _classPrivateFieldGet2;
    (_classPrivateFieldGet2 = _classPrivateFieldGet(_nextPromise, _this)) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.then(resolve)["catch"](reject);
  });
}
// File isn't locked, write data
function _write(_x5) {
  return _write3.apply(this, arguments);
}
function _write3() {
  _write3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
    var _this2 = this;
    var _classPrivateFieldGet3, _classPrivateFieldGet4, nextData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          // Lock file
          _classPrivateFieldSet(_locked, this, true);
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _promises.writeFile)(_classPrivateFieldGet(_tempFilename, this), data, 'utf-8');
        case 4:
          _context4.next = 6;
          return retryAsyncOperation(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _promises.rename)(_classPrivateFieldGet(_tempFilename, _this2), _classPrivateFieldGet(_filename, _this2));
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), 10, 100);
        case 6:
          // Call resolve
          (_classPrivateFieldGet3 = _classPrivateFieldGet(_prev, this)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3[0]();
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          // Call reject
          if (_context4.t0 instanceof Error) {
            (_classPrivateFieldGet4 = _classPrivateFieldGet(_prev, this)) === null || _classPrivateFieldGet4 === void 0 || _classPrivateFieldGet4[1](_context4.t0);
          }
          throw _context4.t0;
        case 13:
          _context4.prev = 13;
          // Unlock file
          _classPrivateFieldSet(_locked, this, false);
          _classPrivateFieldSet(_prev, this, _classPrivateFieldGet(_next2, this));
          _classPrivateFieldSet(_next2, this, _classPrivateFieldSet(_nextPromise, this, null));
          if (!(_classPrivateFieldGet(_nextData, this) !== null)) {
            _context4.next = 22;
            break;
          }
          nextData = _classPrivateFieldGet(_nextData, this);
          _classPrivateFieldSet(_nextData, this, null);
          _context4.next = 22;
          return this.write(nextData);
        case 22:
          return _context4.finish(13);
        case 23:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this, [[1, 9, 13, 23]]);
  }));
  return _write3.apply(this, arguments);
}
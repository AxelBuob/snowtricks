(self["webpackChunk"] = self["webpackChunk"] || []).push([["embed_videos"],{

/***/ "./assets/components/embed_videos.js":
/*!*******************************************!*\
  !*** ./assets/components/embed_videos.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

$(function () {
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  $('[data-url]').each(function (i, e) {
    var url = $(e).data('url');
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      var id = match[2];
      var embedlink = "https://www.youtube.com/embed/" + id;
      e.src = embedlink;
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-9e73f9","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0"], () => (__webpack_exec__("./assets/components/embed_videos.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWRfdmlkZW9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVU7QUFDUixNQUFJQyxNQUFNLEdBQUcsa0VBQWI7QUFFQUQsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsSUFBaEIsQ0FBcUIsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWM7QUFFL0IsUUFBSUMsR0FBRyxHQUFHTCxDQUFDLENBQUNJLENBQUQsQ0FBRCxDQUFLRSxJQUFMLENBQVUsS0FBVixDQUFWO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixHQUFHLENBQUNFLEtBQUosQ0FBVU4sTUFBVixDQUFaOztBQUVBLFFBQUlNLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxNQUFULElBQW1CLEVBQWhDLEVBQW9DO0FBRWhDLFVBQUlDLEVBQUUsR0FBR0YsS0FBSyxDQUFDLENBQUQsQ0FBZDtBQUNBLFVBQUlHLFNBQVMsR0FBRyxtQ0FBbUNELEVBQW5EO0FBQ0FMLE1BQUFBLENBQUMsQ0FBQ08sR0FBRixHQUFRRCxTQUFSO0FBRUg7QUFDSixHQVpEO0FBY0gsQ0FqQkEsQ0FBRDs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2VtYmVkX3ZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHJlZ0V4cCA9IC9eLiooeW91dHVcXC5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuXG4gICAgJCgnW2RhdGEtdXJsXScpLmVhY2goZnVuY3Rpb24oaSxlKSB7XG5cbiAgICAgICAgdmFyIHVybCA9ICQoZSkuZGF0YSgndXJsJyk7XG4gICAgICAgIHZhciBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PSAxMSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgaWQgPSBtYXRjaFsyXTtcbiAgICAgICAgICAgIHZhciBlbWJlZGxpbmsgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiICsgaWQ7XG4gICAgICAgICAgICBlLnNyYyA9IGVtYmVkbGluaztcblxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIE1BVENIKTtcbiAgICAgIHJldHVybiBtYXRjaGVyID8gY2FsbChtYXRjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJyZWdFeHAiLCJlYWNoIiwiaSIsImUiLCJ1cmwiLCJkYXRhIiwibWF0Y2giLCJsZW5ndGgiLCJpZCIsImVtYmVkbGluayIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=
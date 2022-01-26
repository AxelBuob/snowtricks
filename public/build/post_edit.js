(self["webpackChunk"] = self["webpackChunk"] || []).push([["post_edit"],{

/***/ "./assets/post_edit.js":
/*!*****************************!*\
  !*** ./assets/post_edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.onload = function () {
  // Gestion des boutons "Supprimer"
  var links = document.querySelectorAll("[data-delete]"); // On boucle sur links

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      link = _step.value;
      // On écoute le clic
      link.addEventListener("click", function (e) {
        var _this = this;

        // On empêche la navigation
        e.preventDefault(); // On demande confirmation

        if (confirm("Voulez-vous supprimer cette image ?")) {
          // On envoie une requête Ajax vers le href du lien avec la méthode DELETE
          fetch(this.getAttribute("href"), {
            method: "DELETE",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "_token": this.dataset.token
            })
          }).then( // On récupère la réponse en JSON
          function (response) {
            return response.json();
          }).then(function (data) {
            if (data.success) _this.parentElement.remove();else alert(data.error);
          })["catch"](function (e) {
            return alert(e);
          });
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_objec-2d060a","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-1669b7"], () => (__webpack_exec__("./assets/post_edit.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF9lZGl0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQU07QUFDbEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBWixDQUZrQixDQUdsQjs7QUFIa0IsNkNBSUxGLEtBSks7QUFBQTs7QUFBQTtBQUlsQix3REFBb0I7QUFBZkcsTUFBQUEsSUFBZTtBQUNoQjtBQUNBQSxNQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVVDLENBQVYsRUFBYTtBQUFBOztBQUN4QztBQUNBQSxRQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FGd0MsQ0FJeEM7O0FBQ0EsWUFBSUMsT0FBTyxDQUFDLHFDQUFELENBQVgsRUFBb0Q7QUFDaEQ7QUFDQUMsVUFBQUEsS0FBSyxDQUFDLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBRCxFQUE0QjtBQUM3QkMsWUFBQUEsTUFBTSxFQUFFLFFBRHFCO0FBRTdCQyxZQUFBQSxPQUFPLEVBQUU7QUFDTCxrQ0FBb0IsZ0JBRGY7QUFFTCw4QkFBZ0I7QUFGWCxhQUZvQjtBQU03QkMsWUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFLHdCQUFVLEtBQUtDLE9BQUwsQ0FBYUM7QUFBekIsYUFBZjtBQU51QixXQUE1QixDQUFMLENBT0dDLElBUEgsRUFRSTtBQUNBLG9CQUFBQyxRQUFRO0FBQUEsbUJBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsV0FUWixFQVVFRixJQVZGLENBVU8sVUFBQUcsSUFBSSxFQUFJO0FBQ1gsZ0JBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUNJLEtBQUksQ0FBQ0MsYUFBTCxDQUFtQkMsTUFBbkIsR0FESixLQUdJQyxLQUFLLENBQUNKLElBQUksQ0FBQ0ssS0FBTixDQUFMO0FBQ1AsV0FmRCxXQWVTLFVBQUFwQixDQUFDO0FBQUEsbUJBQUltQixLQUFLLENBQUNuQixDQUFELENBQVQ7QUFBQSxXQWZWO0FBZ0JIO0FBQ0osT0F4QkQ7QUF5Qkg7QUEvQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQ3JCLENBaENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Bvc3RfZWRpdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIC8vIEdlc3Rpb24gZGVzIGJvdXRvbnMgXCJTdXBwcmltZXJcIlxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kZWxldGVdXCIpXG4gICAgLy8gT24gYm91Y2xlIHN1ciBsaW5rc1xuICAgIGZvciAobGluayBvZiBsaW5rcykge1xuICAgICAgICAvLyBPbiDDqWNvdXRlIGxlIGNsaWNcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIE9uIGVtcMOqY2hlIGxhIG5hdmlnYXRpb25cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICAvLyBPbiBkZW1hbmRlIGNvbmZpcm1hdGlvblxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJWb3VsZXotdm91cyBzdXBwcmltZXIgY2V0dGUgaW1hZ2UgP1wiKSkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGVudm9pZSB1bmUgcmVxdcOqdGUgQWpheCB2ZXJzIGxlIGhyZWYgZHUgbGllbiBhdmVjIGxhIG3DqXRob2RlIERFTEVURVxuICAgICAgICAgICAgICAgIGZldGNoKHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwiX3Rva2VuXCI6IHRoaXMuZGF0YXNldC50b2tlbiB9KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIHLDqWN1cMOocmUgbGEgcsOpcG9uc2UgZW4gSlNPTlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlID0+IGFsZXJ0KGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJmZXRjaCIsImdldEF0dHJpYnV0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJhbGVydCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
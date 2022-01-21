(self["webpackChunk"] = self["webpackChunk"] || []).push([["post_index"],{

/***/ "./assets/post_index.js":
/*!******************************!*\
  !*** ./assets/post_index.js ***!
  \******************************/
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

        if (confirm("Voulez-vous supprimer cette figure ?")) {
          // On envoie une requête Ajax vers le href du lien avec la méthode DELETE
          fetch(this.getAttribute("href"), {
            method: "DELETE",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json"
            }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_objec-2d060a","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-1669b7"], () => (__webpack_exec__("./assets/post_index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLENBQVosQ0FGa0IsQ0FHbEI7O0FBSGtCLDZDQUlMRixLQUpLO0FBQUE7O0FBQUE7QUFJbEIsd0RBQW9CO0FBQWZHLE1BQUFBLElBQWU7QUFDaEI7QUFDQUEsTUFBQUEsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVQyxDQUFWLEVBQWE7QUFBQTs7QUFDeEM7QUFDQUEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRndDLENBR3hDOztBQUNBLFlBQUlDLE9BQU8sQ0FBQyxzQ0FBRCxDQUFYLEVBQXFEO0FBQ2pEO0FBQ0FDLFVBQUFBLEtBQUssQ0FBQyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQUQsRUFBNEI7QUFDN0JDLFlBQUFBLE1BQU0sRUFBRSxRQURxQjtBQUU3QkMsWUFBQUEsT0FBTyxFQUFFO0FBQ0wsa0NBQW9CLGdCQURmO0FBRUwsOEJBQWdCO0FBRlg7QUFGb0IsV0FBNUIsQ0FBTCxDQU1HQyxJQU5ILEVBT0k7QUFDQSxvQkFBQUMsUUFBUTtBQUFBLG1CQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLFdBUlosRUFTRUYsSUFURixDQVNPLFVBQUFHLElBQUksRUFBSTtBQUNYLGdCQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFDSSxLQUFJLENBQUNDLGFBQUwsQ0FBbUJDLE1BQW5CLEdBREosS0FHSUMsS0FBSyxDQUFDSixJQUFJLENBQUNLLEtBQU4sQ0FBTDtBQUNQLFdBZEQsV0FjUyxVQUFBZixDQUFDO0FBQUEsbUJBQUljLEtBQUssQ0FBQ2QsQ0FBRCxDQUFUO0FBQUEsV0FkVjtBQWVIO0FBQ0osT0F0QkQ7QUF1Qkg7QUE3QmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QnJCLENBOUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Bvc3RfaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAvLyBHZXN0aW9uIGRlcyBib3V0b25zIFwiU3VwcHJpbWVyXCJcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlXVwiKVxuICAgIC8vIE9uIGJvdWNsZSBzdXIgbGlua3NcbiAgICBmb3IgKGxpbmsgb2YgbGlua3MpIHtcbiAgICAgICAgLy8gT24gw6ljb3V0ZSBsZSBjbGljXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBPbiBlbXDDqmNoZSBsYSBuYXZpZ2F0aW9uXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIC8vIE9uIGRlbWFuZGUgY29uZmlybWF0aW9uXG4gICAgICAgICAgICBpZiAoY29uZmlybShcIlZvdWxlei12b3VzIHN1cHByaW1lciBjZXR0ZSBmaWd1cmUgP1wiKSkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGVudm9pZSB1bmUgcmVxdcOqdGUgQWpheCB2ZXJzIGxlIGhyZWYgZHUgbGllbiBhdmVjIGxhIG3DqXRob2RlIERFTEVURVxuICAgICAgICAgICAgICAgIGZldGNoKHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgLy8gT24gcsOpY3Vww6hyZSBsYSByw6lwb25zZSBlbiBKU09OXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4gYWxlcnQoZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJsaW5rcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybSIsImZldGNoIiwiZ2V0QXR0cmlidXRlIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJhbGVydCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
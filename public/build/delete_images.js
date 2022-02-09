(self["webpackChunk"] = self["webpackChunk"] || []).push([["delete_images"],{

/***/ "./assets/components/delete_images.js":
/*!********************************************!*\
  !*** ./assets/components/delete_images.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

document.querySelectorAll('[data-delete]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();

    if (confirm("Voulez-vous supprimer cette image ?")) {
      fetch(a.getAttribute('href'), {
        method: 'DELETE',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          '_token': a.dataset.token
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          a.parentNode.parentNode.remove();
        } else {
          alert(data.error);
        }
      })["catch"](function (e) {
        return alert(e);
      });
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--af0231","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_pro-54b034"], () => (__webpack_exec__("./assets/components/delete_images.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlX2ltYWdlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQUFDLENBQUMsRUFBSTtBQUNwREEsRUFBQUEsQ0FBQyxDQUFDQyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixVQUFBQyxDQUFDLEVBQUk7QUFDN0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJQyxPQUFPLENBQUMscUNBQUQsQ0FBWCxFQUFvRDtBQUVoREMsTUFBQUEsS0FBSyxDQUFDTCxDQUFDLENBQUNNLFlBQUYsQ0FBZSxNQUFmLENBQUQsRUFBeUI7QUFDMUJDLFFBQUFBLE1BQU0sRUFBRSxRQURrQjtBQUUxQkMsUUFBQUEsT0FBTyxFQUFFO0FBQ0wsOEJBQW9CLGdCQURmO0FBRUwsMEJBQWdCO0FBRlgsU0FGaUI7QUFNMUJDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRSxvQkFBVVgsQ0FBQyxDQUFDWSxPQUFGLENBQVVDO0FBQXRCLFNBQWY7QUFOb0IsT0FBekIsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsT0FQaEIsRUFRS0YsSUFSTCxDQVFVLFVBQUFHLElBQUksRUFBSTtBQUNWLFlBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNkbEIsVUFBQUEsQ0FBQyxDQUFDbUIsVUFBRixDQUFhQSxVQUFiLENBQXdCQyxNQUF4QjtBQUNILFNBRkQsTUFFTztBQUNIQyxVQUFBQSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssS0FBTixDQUFMO0FBQ0g7QUFDSixPQWRMLFdBZVcsVUFBQXBCLENBQUM7QUFBQSxlQUFJbUIsS0FBSyxDQUFDbkIsQ0FBRCxDQUFUO0FBQUEsT0FmWjtBQWdCSDtBQUNKLEdBckJEO0FBc0JILENBdkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZGVsZXRlX2ltYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kZWxldGVdJykuZm9yRWFjaChhID0+IHtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoY29uZmlybShcIlZvdWxlei12b3VzIHN1cHByaW1lciBjZXR0ZSBpbWFnZSA/XCIpKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgZmV0Y2goYS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgJ190b2tlbic6IGEuZGF0YXNldC50b2tlbiB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBhbGVydChlKSlcbiAgICAgICAgfVxuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25maXJtIiwiZmV0Y2giLCJnZXRBdHRyaWJ1dGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwiYWxlcnQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=
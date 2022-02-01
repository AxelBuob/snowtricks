(self["webpackChunk"] = self["webpackChunk"] || []).push([["trick-form"],{

/***/ "./assets/trick-form.js":
/*!******************************!*\
  !*** ./assets/trick-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(document).ready(function () {
  function handleDeleteButton() {
    $('button[data-action="delete"]').click(function (e) {
      e.preventDefault();
      var target = this.dataset.target;
      $(target).remove();
    });
  }

  $('#add-video').click(function (e) {
    var list = jQuery(jQuery(this).attr('data-list-selector')); // Try to find the counter of the list or use the length of the list

    var counter = list.data('video-counter') || list.children().length; // grab the prototype template

    var newWidget = list.attr('data-video-prototype'); // replace the "__name__" used in the id and name of the prototype
    // with a number that's unique to your emails
    // end name attribute looks like name="contact[emails][2]"

    newWidget = newWidget.replace(/__name__/g, counter); // Increase the counter

    counter++; // And store it, the length cannot be used if deleting widgets is allowed

    list.data('widget-counter', counter); // create a new list element and add it to the list

    var newElem = jQuery(list.attr('data-video-tags')).html(newWidget);
    newElem.appendTo(list);
    handleDeleteButton();
  });
  handleDeleteButton();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-appl-5a1e08","vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/trick-form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpY2stZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFFMUIsV0FBU0Msa0JBQVQsR0FDQTtBQUNJSCxJQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0ksS0FBbEMsQ0FBd0MsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hEQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsT0FBTCxDQUFhRCxNQUE1QjtBQUNBUCxNQUFBQSxDQUFDLENBQUNPLE1BQUQsQ0FBRCxDQUFVRSxNQUFWO0FBQ0gsS0FKRDtBQUtIOztBQUVEVCxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSSxLQUFoQixDQUFzQixVQUFVQyxDQUFWLEVBQWE7QUFDL0IsUUFBSUssSUFBSSxHQUFHQyxNQUFNLENBQUNBLE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYUMsSUFBYixDQUFrQixvQkFBbEIsQ0FBRCxDQUFqQixDQUQrQixDQUUvQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdILElBQUksQ0FBQ0ksSUFBTCxDQUFVLGVBQVYsS0FBOEJKLElBQUksQ0FBQ0ssUUFBTCxHQUFnQkMsTUFBNUQsQ0FIK0IsQ0FLL0I7O0FBQ0EsUUFBSUMsU0FBUyxHQUFHUCxJQUFJLENBQUNFLElBQUwsQ0FBVSxzQkFBVixDQUFoQixDQU4rQixDQU8vQjtBQUNBO0FBQ0E7O0FBQ0FLLElBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDQyxPQUFWLENBQWtCLFdBQWxCLEVBQStCTCxPQUEvQixDQUFaLENBVitCLENBVy9COztBQUNBQSxJQUFBQSxPQUFPLEdBWndCLENBYS9COztBQUNBSCxJQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVSxnQkFBVixFQUE0QkQsT0FBNUIsRUFkK0IsQ0FnQi9COztBQUNBLFFBQUlNLE9BQU8sR0FBR1IsTUFBTSxDQUFDRCxJQUFJLENBQUNFLElBQUwsQ0FBVSxpQkFBVixDQUFELENBQU4sQ0FBcUNRLElBQXJDLENBQTBDSCxTQUExQyxDQUFkO0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQlgsSUFBakI7QUFFQVAsSUFBQUEsa0JBQWtCO0FBQ3JCLEdBckJEO0FBdUJBQSxFQUFBQSxrQkFBa0I7QUFFckIsQ0FwQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdHJpY2stZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b24oKVxuICAgIHtcbiAgICAgICAgJCgnYnV0dG9uW2RhdGEtYWN0aW9uPVwiZGVsZXRlXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnI2FkZC12aWRlbycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsaXN0ID0galF1ZXJ5KGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLWxpc3Qtc2VsZWN0b3InKSk7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3VudGVyIG9mIHRoZSBsaXN0IG9yIHVzZSB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0XG4gICAgICAgIHZhciBjb3VudGVyID0gbGlzdC5kYXRhKCd2aWRlby1jb3VudGVyJykgfHwgbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICAvLyBncmFiIHRoZSBwcm90b3R5cGUgdGVtcGxhdGVcbiAgICAgICAgdmFyIG5ld1dpZGdldCA9IGxpc3QuYXR0cignZGF0YS12aWRlby1wcm90b3R5cGUnKTtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgXCJfX25hbWVfX1wiIHVzZWQgaW4gdGhlIGlkIGFuZCBuYW1lIG9mIHRoZSBwcm90b3R5cGVcbiAgICAgICAgLy8gd2l0aCBhIG51bWJlciB0aGF0J3MgdW5pcXVlIHRvIHlvdXIgZW1haWxzXG4gICAgICAgIC8vIGVuZCBuYW1lIGF0dHJpYnV0ZSBsb29rcyBsaWtlIG5hbWU9XCJjb250YWN0W2VtYWlsc11bMl1cIlxuICAgICAgICBuZXdXaWRnZXQgPSBuZXdXaWRnZXQucmVwbGFjZSgvX19uYW1lX18vZywgY291bnRlcik7XG4gICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgLy8gQW5kIHN0b3JlIGl0LCB0aGUgbGVuZ3RoIGNhbm5vdCBiZSB1c2VkIGlmIGRlbGV0aW5nIHdpZGdldHMgaXMgYWxsb3dlZFxuICAgICAgICBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJywgY291bnRlcik7XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGxpc3QgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICAgIHZhciBuZXdFbGVtID0galF1ZXJ5KGxpc3QuYXR0cignZGF0YS12aWRlby10YWdzJykpLmh0bWwobmV3V2lkZ2V0KTtcbiAgICAgICAgbmV3RWxlbS5hcHBlbmRUbyhsaXN0KTtcblxuICAgICAgICBoYW5kbGVEZWxldGVCdXR0b24oKTtcbiAgICB9KTtcblxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbigpO1xuXG59KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJoYW5kbGVEZWxldGVCdXR0b24iLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImRhdGFzZXQiLCJyZW1vdmUiLCJsaXN0IiwialF1ZXJ5IiwiYXR0ciIsImNvdW50ZXIiLCJkYXRhIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdXaWRnZXQiLCJyZXBsYWNlIiwibmV3RWxlbSIsImh0bWwiLCJhcHBlbmRUbyJdLCJzb3VyY2VSb290IjoiIn0=
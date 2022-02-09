(self["webpackChunk"] = self["webpackChunk"] || []).push([["add_images"],{

/***/ "./assets/components/add_images.js":
/*!*****************************************!*\
  !*** ./assets/components/add_images.js ***!
  \*****************************************/
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

  $('#add-image').click(function (e) {
    var list = jQuery(jQuery(this).attr('data-image-selector')); // Try to find the counter of the list or use the length of the list

    var counter = list.data('image-counter') || list.children().length; // grab the prototype template

    var newImageWidget = list.attr('data-image-prototype'); // replace the "__name__" used in the id and name of the prototype
    // with a number that's unique to your emails
    // end name attribute looks like name="contact[emails][2]"

    newImageWidget = newImageWidget.replace(/__name__/g, counter); // Increase the counter

    counter++; // And store it, the length cannot be used if deleting widgets is allowed

    list.data('widget-counter', counter); // create a new list element and add it to the list

    var newImageElement = jQuery(list.attr('data-image-tags')).html(newImageWidget);
    newImageElement.appendTo(list);
    handleDeleteButton();
  });
  handleDeleteButton();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-appl-5a1e08","vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/components/add_images.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX2ltYWdlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFFMUIsV0FBU0Msa0JBQVQsR0FBOEI7QUFDMUJILElBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDSSxLQUFsQyxDQUF3QyxVQUFVQyxDQUFWLEVBQWE7QUFDakRBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxLQUFLQyxPQUFMLENBQWFELE1BQTVCO0FBQ0FQLE1BQUFBLENBQUMsQ0FBQ08sTUFBRCxDQUFELENBQVVFLE1BQVY7QUFDSCxLQUpEO0FBS0g7O0FBRURULEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JJLEtBQWhCLENBQXNCLFVBQVVDLENBQVYsRUFBYTtBQUMvQixRQUFJSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhQyxJQUFiLENBQWtCLHFCQUFsQixDQUFELENBQWpCLENBRCtCLENBRS9COztBQUNBLFFBQUlDLE9BQU8sR0FBR0gsSUFBSSxDQUFDSSxJQUFMLENBQVUsZUFBVixLQUE4QkosSUFBSSxDQUFDSyxRQUFMLEdBQWdCQyxNQUE1RCxDQUgrQixDQUkvQjs7QUFDQSxRQUFJQyxjQUFjLEdBQUdQLElBQUksQ0FBQ0UsSUFBTCxDQUFVLHNCQUFWLENBQXJCLENBTCtCLENBTS9CO0FBQ0E7QUFDQTs7QUFDQUssSUFBQUEsY0FBYyxHQUFHQSxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsV0FBdkIsRUFBb0NMLE9BQXBDLENBQWpCLENBVCtCLENBVS9COztBQUNBQSxJQUFBQSxPQUFPLEdBWHdCLENBWS9COztBQUNBSCxJQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVSxnQkFBVixFQUE0QkQsT0FBNUIsRUFiK0IsQ0FlL0I7O0FBQ0EsUUFBSU0sZUFBZSxHQUFHUixNQUFNLENBQUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVLGlCQUFWLENBQUQsQ0FBTixDQUFxQ1EsSUFBckMsQ0FBMENILGNBQTFDLENBQXRCO0FBQ0FFLElBQUFBLGVBQWUsQ0FBQ0UsUUFBaEIsQ0FBeUJYLElBQXpCO0FBRUFQLElBQUFBLGtCQUFrQjtBQUNyQixHQXBCRDtBQXNCQUEsRUFBQUEsa0JBQWtCO0FBRXJCLENBbENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRkX2ltYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b24oKSB7XG4gICAgICAgICQoJ2J1dHRvbltkYXRhLWFjdGlvbj1cImRlbGV0ZVwiXScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCcjYWRkLWltYWdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBqUXVlcnkoalF1ZXJ5KHRoaXMpLmF0dHIoJ2RhdGEtaW1hZ2Utc2VsZWN0b3InKSk7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3VudGVyIG9mIHRoZSBsaXN0IG9yIHVzZSB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0XG4gICAgICAgIHZhciBjb3VudGVyID0gbGlzdC5kYXRhKCdpbWFnZS1jb3VudGVyJykgfHwgbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXG4gICAgICAgIHZhciBuZXdJbWFnZVdpZGdldCA9IGxpc3QuYXR0cignZGF0YS1pbWFnZS1wcm90b3R5cGUnKTtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgXCJfX25hbWVfX1wiIHVzZWQgaW4gdGhlIGlkIGFuZCBuYW1lIG9mIHRoZSBwcm90b3R5cGVcbiAgICAgICAgLy8gd2l0aCBhIG51bWJlciB0aGF0J3MgdW5pcXVlIHRvIHlvdXIgZW1haWxzXG4gICAgICAgIC8vIGVuZCBuYW1lIGF0dHJpYnV0ZSBsb29rcyBsaWtlIG5hbWU9XCJjb250YWN0W2VtYWlsc11bMl1cIlxuICAgICAgICBuZXdJbWFnZVdpZGdldCA9IG5ld0ltYWdlV2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGNvdW50ZXIpO1xuICAgICAgICAvLyBJbmNyZWFzZSB0aGUgY291bnRlclxuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIC8vIEFuZCBzdG9yZSBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcbiAgICAgICAgbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicsIGNvdW50ZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBsaXN0IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICB2YXIgbmV3SW1hZ2VFbGVtZW50ID0galF1ZXJ5KGxpc3QuYXR0cignZGF0YS1pbWFnZS10YWdzJykpLmh0bWwobmV3SW1hZ2VXaWRnZXQpO1xuICAgICAgICBuZXdJbWFnZUVsZW1lbnQuYXBwZW5kVG8obGlzdCk7XG5cbiAgICAgICAgaGFuZGxlRGVsZXRlQnV0dG9uKCk7XG4gICAgfSk7XG5cbiAgICBoYW5kbGVEZWxldGVCdXR0b24oKTtcblxufSk7Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGFuZGxlRGVsZXRlQnV0dG9uIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwicmVtb3ZlIiwibGlzdCIsImpRdWVyeSIsImF0dHIiLCJjb3VudGVyIiwiZGF0YSIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3SW1hZ2VXaWRnZXQiLCJyZXBsYWNlIiwibmV3SW1hZ2VFbGVtZW50IiwiaHRtbCIsImFwcGVuZFRvIl0sInNvdXJjZVJvb3QiOiIifQ==
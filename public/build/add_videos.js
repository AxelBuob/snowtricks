(self["webpackChunk"] = self["webpackChunk"] || []).push([["add_videos"],{

/***/ "./assets/components/add_videos.js":
/*!*****************************************!*\
  !*** ./assets/components/add_videos.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(document).ready(function () {
  $('#post_featured_image').on('change', function (e) {
    var inputFile = e.currentTarget;
  });

  function handleDeleteButton() {
    $('button[data-action="delete"]').click(function (e) {
      e.preventDefault();
      var target = this.dataset.target;
      $(target).remove();
    });
  }

  $('#add-video').click(function (e) {
    var list = jQuery(jQuery(this).attr('data-video-selector')); // Try to find the counter of the list or use the length of the list

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/components/add_videos.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX3ZpZGVvcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFFMUJGLEVBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRyxFQUExQixDQUE2QixRQUE3QixFQUF1QyxVQUFTQyxDQUFULEVBQVc7QUFDOUMsUUFBSUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLGFBQWxCO0FBQ0gsR0FGRDs7QUFJQSxXQUFTQyxrQkFBVCxHQUNBO0FBQ0lQLElBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDUSxLQUFsQyxDQUF3QyxVQUFTSixDQUFULEVBQVk7QUFDaERBLE1BQUFBLENBQUMsQ0FBQ0ssY0FBRjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxLQUFLQyxPQUFMLENBQWFELE1BQTVCO0FBQ0FWLE1BQUFBLENBQUMsQ0FBQ1UsTUFBRCxDQUFELENBQVVFLE1BQVY7QUFDSCxLQUpEO0FBS0g7O0FBRURaLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JRLEtBQWhCLENBQXNCLFVBQVVKLENBQVYsRUFBYTtBQUMvQixRQUFJUyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhQyxJQUFiLENBQWtCLHFCQUFsQixDQUFELENBQWpCLENBRCtCLENBRS9COztBQUNBLFFBQUlDLE9BQU8sR0FBR0gsSUFBSSxDQUFDSSxJQUFMLENBQVUsZUFBVixLQUE4QkosSUFBSSxDQUFDSyxRQUFMLEdBQWdCQyxNQUE1RCxDQUgrQixDQUsvQjs7QUFDQSxRQUFJQyxTQUFTLEdBQUdQLElBQUksQ0FBQ0UsSUFBTCxDQUFVLHNCQUFWLENBQWhCLENBTitCLENBTy9CO0FBQ0E7QUFDQTs7QUFDQUssSUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0IsV0FBbEIsRUFBK0JMLE9BQS9CLENBQVosQ0FWK0IsQ0FXL0I7O0FBQ0FBLElBQUFBLE9BQU8sR0Fad0IsQ0FhL0I7O0FBQ0FILElBQUFBLElBQUksQ0FBQ0ksSUFBTCxDQUFVLGdCQUFWLEVBQTRCRCxPQUE1QixFQWQrQixDQWdCL0I7O0FBQ0EsUUFBSU0sT0FBTyxHQUFHUixNQUFNLENBQUNELElBQUksQ0FBQ0UsSUFBTCxDQUFVLGlCQUFWLENBQUQsQ0FBTixDQUFxQ1EsSUFBckMsQ0FBMENILFNBQTFDLENBQWQ7QUFDQUUsSUFBQUEsT0FBTyxDQUFDRSxRQUFSLENBQWlCWCxJQUFqQjtBQUVBTixJQUFBQSxrQkFBa0I7QUFDckIsR0FyQkQ7QUF1QkFBLEVBQUFBLGtCQUFrQjtBQUVyQixDQXhDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkZF92aWRlb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgJCgnI3Bvc3RfZmVhdHVyZWRfaW1hZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBpbnB1dEZpbGUgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b24oKVxuICAgIHtcbiAgICAgICAgJCgnYnV0dG9uW2RhdGEtYWN0aW9uPVwiZGVsZXRlXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnI2FkZC12aWRlbycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsaXN0ID0galF1ZXJ5KGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLXZpZGVvLXNlbGVjdG9yJykpO1xuICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY291bnRlciBvZiB0aGUgbGlzdCBvciB1c2UgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdFxuICAgICAgICB2YXIgY291bnRlciA9IGxpc3QuZGF0YSgndmlkZW8tY291bnRlcicpIHx8IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXG4gICAgICAgIHZhciBuZXdXaWRnZXQgPSBsaXN0LmF0dHIoJ2RhdGEtdmlkZW8tcHJvdG90eXBlJyk7XG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIFwiX19uYW1lX19cIiB1c2VkIGluIHRoZSBpZCBhbmQgbmFtZSBvZiB0aGUgcHJvdG90eXBlXG4gICAgICAgIC8vIHdpdGggYSBudW1iZXIgdGhhdCdzIHVuaXF1ZSB0byB5b3VyIGVtYWlsc1xuICAgICAgICAvLyBlbmQgbmFtZSBhdHRyaWJ1dGUgbG9va3MgbGlrZSBuYW1lPVwiY29udGFjdFtlbWFpbHNdWzJdXCJcbiAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGNvdW50ZXIpO1xuICAgICAgICAvLyBJbmNyZWFzZSB0aGUgY291bnRlclxuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIC8vIEFuZCBzdG9yZSBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcbiAgICAgICAgbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicsIGNvdW50ZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBsaXN0IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICB2YXIgbmV3RWxlbSA9IGpRdWVyeShsaXN0LmF0dHIoJ2RhdGEtdmlkZW8tdGFncycpKS5odG1sKG5ld1dpZGdldCk7XG4gICAgICAgIG5ld0VsZW0uYXBwZW5kVG8obGlzdCk7XG5cbiAgICAgICAgaGFuZGxlRGVsZXRlQnV0dG9uKCk7XG4gICAgfSk7XG5cbiAgICBoYW5kbGVEZWxldGVCdXR0b24oKTtcblxufSk7Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlIiwiaW5wdXRGaWxlIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURlbGV0ZUJ1dHRvbiIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwicmVtb3ZlIiwibGlzdCIsImpRdWVyeSIsImF0dHIiLCJjb3VudGVyIiwiZGF0YSIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3V2lkZ2V0IiwicmVwbGFjZSIsIm5ld0VsZW0iLCJodG1sIiwiYXBwZW5kVG8iXSwic291cmNlUm9vdCI6IiJ9
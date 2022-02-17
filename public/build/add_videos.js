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

$(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX3ZpZGVvcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUVWLFdBQVNDLGtCQUFULEdBQ0E7QUFDSUQsSUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NFLEtBQWxDLENBQXdDLFVBQVNDLENBQVQsRUFBWTtBQUNoREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUQsTUFBNUI7QUFDQUwsTUFBQUEsQ0FBQyxDQUFDSyxNQUFELENBQUQsQ0FBVUUsTUFBVjtBQUNILEtBSkQ7QUFLSDs7QUFFRFAsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsS0FBaEIsQ0FBc0IsVUFBVUMsQ0FBVixFQUFhO0FBQy9CLFFBQUlLLElBQUksR0FBR0MsTUFBTSxDQUFDQSxNQUFNLENBQUMsSUFBRCxDQUFOLENBQWFDLElBQWIsQ0FBa0IscUJBQWxCLENBQUQsQ0FBakIsQ0FEK0IsQ0FFL0I7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHSCxJQUFJLENBQUNJLElBQUwsQ0FBVSxlQUFWLEtBQThCSixJQUFJLENBQUNLLFFBQUwsR0FBZ0JDLE1BQTVELENBSCtCLENBSy9COztBQUNBLFFBQUlDLFNBQVMsR0FBR1AsSUFBSSxDQUFDRSxJQUFMLENBQVUsc0JBQVYsQ0FBaEIsQ0FOK0IsQ0FPL0I7QUFDQTtBQUNBOztBQUNBSyxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixXQUFsQixFQUErQkwsT0FBL0IsQ0FBWixDQVYrQixDQVcvQjs7QUFDQUEsSUFBQUEsT0FBTyxHQVp3QixDQWEvQjs7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVUsZ0JBQVYsRUFBNEJELE9BQTVCLEVBZCtCLENBZ0IvQjs7QUFDQSxRQUFJTSxPQUFPLEdBQUdSLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxJQUFMLENBQVUsaUJBQVYsQ0FBRCxDQUFOLENBQXFDUSxJQUFyQyxDQUEwQ0gsU0FBMUMsQ0FBZDtBQUNBRSxJQUFBQSxPQUFPLENBQUNFLFFBQVIsQ0FBaUJYLElBQWpCO0FBRUFQLElBQUFBLGtCQUFrQjtBQUNyQixHQXJCRDtBQXVCQUEsRUFBQUEsa0JBQWtCO0FBRXJCLENBcENBLENBQUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZGRfdmlkZW9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQnV0dG9uKClcbiAgICB7XG4gICAgICAgICQoJ2J1dHRvbltkYXRhLWFjdGlvbj1cImRlbGV0ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgICAgICAkKHRhcmdldCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoJyNhZGQtdmlkZW8nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbGlzdCA9IGpRdWVyeShqUXVlcnkodGhpcykuYXR0cignZGF0YS12aWRlby1zZWxlY3RvcicpKTtcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBsaXN0LmRhdGEoJ3ZpZGVvLWNvdW50ZXInKSB8fCBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICAgIC8vIGdyYWIgdGhlIHByb3RvdHlwZSB0ZW1wbGF0ZVxuICAgICAgICB2YXIgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXZpZGVvLXByb3RvdHlwZScpO1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBcIl9fbmFtZV9fXCIgdXNlZCBpbiB0aGUgaWQgYW5kIG5hbWUgb2YgdGhlIHByb3RvdHlwZVxuICAgICAgICAvLyB3aXRoIGEgbnVtYmVyIHRoYXQncyB1bmlxdWUgdG8geW91ciBlbWFpbHNcbiAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXG4gICAgICAgIG5ld1dpZGdldCA9IG5ld1dpZGdldC5yZXBsYWNlKC9fX25hbWVfXy9nLCBjb3VudGVyKTtcbiAgICAgICAgLy8gSW5jcmVhc2UgdGhlIGNvdW50ZXJcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICAvLyBBbmQgc3RvcmUgaXQsIHRoZSBsZW5ndGggY2Fubm90IGJlIHVzZWQgaWYgZGVsZXRpbmcgd2lkZ2V0cyBpcyBhbGxvd2VkXG4gICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXInLCBjb3VudGVyKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbGlzdCBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgICAgdmFyIG5ld0VsZW0gPSBqUXVlcnkobGlzdC5hdHRyKCdkYXRhLXZpZGVvLXRhZ3MnKSkuaHRtbChuZXdXaWRnZXQpO1xuICAgICAgICBuZXdFbGVtLmFwcGVuZFRvKGxpc3QpO1xuXG4gICAgICAgIGhhbmRsZURlbGV0ZUJ1dHRvbigpO1xuICAgIH0pO1xuXG4gICAgaGFuZGxlRGVsZXRlQnV0dG9uKCk7XG5cbn0pOyJdLCJuYW1lcyI6WyIkIiwiaGFuZGxlRGVsZXRlQnV0dG9uIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwicmVtb3ZlIiwibGlzdCIsImpRdWVyeSIsImF0dHIiLCJjb3VudGVyIiwiZGF0YSIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3V2lkZ2V0IiwicmVwbGFjZSIsIm5ld0VsZW0iLCJodG1sIiwiYXBwZW5kVG8iXSwic291cmNlUm9vdCI6IiJ9
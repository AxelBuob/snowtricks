(self["webpackChunk"] = self["webpackChunk"] || []).push([["collapse_small_screen"],{

/***/ "./assets/components/collapse_small_screen.js":
/*!****************************************************!*\
  !*** ./assets/components/collapse_small_screen.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  var sm_w = 576;

  if ($(window).width() <= sm_w) {
    $('#collapse-images').addClass('collapse');
    $('#collapse-videos').addClass('collapse');
  }

  if ($(window).width() > sm_w) {
    $('#show-images').hide();
    $('#show-videos').hide();
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/components/collapse_small_screen.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2Vfc21hbGxfc2NyZWVuLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUNSLE1BQUlDLElBQUksR0FBRyxHQUFYOztBQUNBLE1BQUdELENBQUMsQ0FBQ0UsTUFBRCxDQUFELENBQVVDLEtBQVYsTUFBcUJGLElBQXhCLEVBQ0E7QUFDSUQsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JJLFFBQXRCLENBQStCLFVBQS9CO0FBQ0FKLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSSxRQUF0QixDQUErQixVQUEvQjtBQUNIOztBQUNELE1BQUdKLENBQUMsQ0FBQ0UsTUFBRCxDQUFELENBQVVDLEtBQVYsS0FBb0JGLElBQXZCLEVBQ0E7QUFDSUQsSUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssSUFBbEI7QUFDQUwsSUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssSUFBbEI7QUFDSDtBQUNKLENBWkEsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbGxhcHNlX3NtYWxsX3NjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNtX3cgPSA1NzY7XG4gICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gc21fdylcbiAgICB7XG4gICAgICAgICQoJyNjb2xsYXBzZS1pbWFnZXMnKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgJCgnI2NvbGxhcHNlLXZpZGVvcycpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xuICAgIH1cbiAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IHNtX3cpXG4gICAge1xuICAgICAgICAkKCcjc2hvdy1pbWFnZXMnKS5oaWRlKCk7XG4gICAgICAgICQoJyNzaG93LXZpZGVvcycpLmhpZGUoKTtcbiAgICB9XG59KTsiXSwibmFtZXMiOlsiJCIsInNtX3ciLCJ3aW5kb3ciLCJ3aWR0aCIsImFkZENsYXNzIiwiaGlkZSJdLCJzb3VyY2VSb290IjoiIn0=
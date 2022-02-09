(self["webpackChunk"] = self["webpackChunk"] || []).push([["load_more_posts"],{

/***/ "./assets/components/load_more_posts.js":
/*!**********************************************!*\
  !*** ./assets/components/load_more_posts.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  var postsContainer = $('#postsContainer');
  var loadMorebutton = $('#loadMoreButton');
  var paginator = $(loadMorebutton).data(paginator);
  var numResults = paginator.paginator.numResults;
  var pageSize = paginator.paginator.pageSize;
  var currentPage = paginator.paginator.currentPage;
  maxPage = numResults / pageSize;
  var page = currentPage;
  loadMorebutton.on("click", function (e) {
    e.preventDefault();
    page++;

    if (page >= maxPage) {
      $(loadMorebutton).hide();
    }

    $.ajax({
      method: "GET",
      url: "/page/" + page,
      success: function success(response) {
        console.log(response);
        $(postsContainer).append(response);
      }
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/components/load_more_posts.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZF9tb3JlX3Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBQSxDQUFDLENBQUMsWUFBVztBQUNULE1BQUlDLGNBQWMsR0FBR0QsQ0FBQyxDQUFDLGlCQUFELENBQXRCO0FBQ0EsTUFBSUUsY0FBYyxHQUFHRixDQUFDLENBQUMsaUJBQUQsQ0FBdEI7QUFFQSxNQUFJRyxTQUFTLEdBQUdILENBQUMsQ0FBQ0UsY0FBRCxDQUFELENBQWtCRSxJQUFsQixDQUF1QkQsU0FBdkIsQ0FBaEI7QUFDQSxNQUFJRSxVQUFVLEdBQUdGLFNBQVMsQ0FBQ0EsU0FBVixDQUFvQkUsVUFBckM7QUFDQSxNQUFJQyxRQUFRLEdBQUdILFNBQVMsQ0FBQ0EsU0FBVixDQUFvQkcsUUFBbkM7QUFDQSxNQUFJQyxXQUFXLEdBQUdKLFNBQVMsQ0FBQ0EsU0FBVixDQUFvQkksV0FBdEM7QUFFQUMsRUFBQUEsT0FBTyxHQUFHSCxVQUFVLEdBQUdDLFFBQXZCO0FBQ0EsTUFBSUcsSUFBSSxHQUFHRixXQUFYO0FBRUFMLEVBQUFBLGNBQWMsQ0FBQ1EsRUFBZixDQUFrQixPQUFsQixFQUEyQixVQUFVQyxDQUFWLEVBQWE7QUFDcENBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxJQUFBQSxJQUFJOztBQUNKLFFBQUdBLElBQUksSUFBSUQsT0FBWCxFQUNBO0FBQ0lSLE1BQUFBLENBQUMsQ0FBQ0UsY0FBRCxDQUFELENBQWtCVyxJQUFsQjtBQUNIOztBQUNEYixJQUFBQSxDQUFDLENBQUNjLElBQUYsQ0FBTztBQUNIQyxNQUFBQSxNQUFNLEVBQUUsS0FETDtBQUVIQyxNQUFBQSxHQUFHLEVBQUUsV0FBV1AsSUFGYjtBQUdIUSxNQUFBQSxPQUhHLG1CQUdLQyxRQUhMLEVBR2U7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQWxCLFFBQUFBLENBQUMsQ0FBQ0MsY0FBRCxDQUFELENBQWtCb0IsTUFBbEIsQ0FBeUJILFFBQXpCO0FBQ0g7QUFORSxLQUFQO0FBUUgsR0FmRDtBQWdCSCxDQTVCQSxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZF9tb3JlX3Bvc3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJChmdW5jdGlvbigpIHtcbiAgICB2YXIgcG9zdHNDb250YWluZXIgPSAkKCcjcG9zdHNDb250YWluZXInKTtcbiAgICB2YXIgbG9hZE1vcmVidXR0b24gPSAkKCcjbG9hZE1vcmVCdXR0b24nKTtcbiAgICBcbiAgICB2YXIgcGFnaW5hdG9yID0gJChsb2FkTW9yZWJ1dHRvbikuZGF0YShwYWdpbmF0b3IpO1xuICAgIHZhciBudW1SZXN1bHRzID0gcGFnaW5hdG9yLnBhZ2luYXRvci5udW1SZXN1bHRzO1xuICAgIHZhciBwYWdlU2l6ZSA9IHBhZ2luYXRvci5wYWdpbmF0b3IucGFnZVNpemU7XG4gICAgdmFyIGN1cnJlbnRQYWdlID0gcGFnaW5hdG9yLnBhZ2luYXRvci5jdXJyZW50UGFnZTtcbiAgICBcbiAgICBtYXhQYWdlID0gbnVtUmVzdWx0cyAvIHBhZ2VTaXplO1xuICAgIHZhciBwYWdlID0gY3VycmVudFBhZ2U7XG5cbiAgICBsb2FkTW9yZWJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGFnZSsrO1xuICAgICAgICBpZihwYWdlID49IG1heFBhZ2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQobG9hZE1vcmVidXR0b24pLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9wYWdlL1wiICsgcGFnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJChwb3N0c0NvbnRhaW5lcikuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiJCIsInBvc3RzQ29udGFpbmVyIiwibG9hZE1vcmVidXR0b24iLCJwYWdpbmF0b3IiLCJkYXRhIiwibnVtUmVzdWx0cyIsInBhZ2VTaXplIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGlkZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==
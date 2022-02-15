(self["webpackChunk"] = self["webpackChunk"] || []).push([["load_more_comments"],{

/***/ "./assets/components/load_more_comments.js":
/*!*************************************************!*\
  !*** ./assets/components/load_more_comments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  var commentsContainer = $('#commentsContainer');
  var loadMorebutton = $('#loadMoreButton');
  var slug = $(commentsContainer).data(slug);
  var paginator = $(commentsContainer).data(paginator);
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
      url: "/figure/" + slug.slug + "/page/" + page,
      success: function success(response) {
        console.log(response);
        $(commentsContainer).append(response);
      }
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/components/load_more_comments.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZF9tb3JlX2NvbW1lbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBQSxDQUFDLENBQUMsWUFBVztBQUNULE1BQUlDLGlCQUFpQixHQUFHRCxDQUFDLENBQUMsb0JBQUQsQ0FBekI7QUFDQSxNQUFJRSxjQUFjLEdBQUdGLENBQUMsQ0FBQyxpQkFBRCxDQUF0QjtBQUVBLE1BQUlHLElBQUksR0FBR0gsQ0FBQyxDQUFDQyxpQkFBRCxDQUFELENBQXFCRyxJQUFyQixDQUEwQkQsSUFBMUIsQ0FBWDtBQUNBLE1BQUlFLFNBQVMsR0FBR0wsQ0FBQyxDQUFDQyxpQkFBRCxDQUFELENBQXFCRyxJQUFyQixDQUEwQkMsU0FBMUIsQ0FBaEI7QUFFQSxNQUFJQyxVQUFVLEdBQUdELFNBQVMsQ0FBQ0EsU0FBVixDQUFvQkMsVUFBckM7QUFDQSxNQUFJQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0EsU0FBVixDQUFvQkUsUUFBbkM7QUFDQSxNQUFJQyxXQUFXLEdBQUdILFNBQVMsQ0FBQ0EsU0FBVixDQUFvQkcsV0FBdEM7QUFFQUMsRUFBQUEsT0FBTyxHQUFHSCxVQUFVLEdBQUdDLFFBQXZCO0FBQ0EsTUFBSUcsSUFBSSxHQUFHRixXQUFYO0FBSUFOLEVBQUFBLGNBQWMsQ0FBQ1MsRUFBZixDQUFrQixPQUFsQixFQUEyQixVQUFVQyxDQUFWLEVBQWE7QUFDcENBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxJQUFBQSxJQUFJOztBQUNKLFFBQUdBLElBQUksSUFBSUQsT0FBWCxFQUNBO0FBQ0lULE1BQUFBLENBQUMsQ0FBQ0UsY0FBRCxDQUFELENBQWtCWSxJQUFsQjtBQUNIOztBQUNEZCxJQUFBQSxDQUFDLENBQUNlLElBQUYsQ0FBTztBQUNIQyxNQUFBQSxNQUFNLEVBQUUsS0FETDtBQUVIQyxNQUFBQSxHQUFHLEVBQUUsYUFBYWQsSUFBSSxDQUFDQSxJQUFsQixHQUF5QixRQUF6QixHQUFvQ08sSUFGdEM7QUFHSFEsTUFBQUEsT0FIRyxtQkFHS0MsUUFITCxFQUdlO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FuQixRQUFBQSxDQUFDLENBQUNDLGlCQUFELENBQUQsQ0FBcUJxQixNQUFyQixDQUE0QkgsUUFBNUI7QUFDSDtBQU5FLEtBQVA7QUFRSCxHQWZEO0FBZ0JILENBaENBLENBQUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sb2FkX21vcmVfY29tbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21tZW50c0NvbnRhaW5lciA9ICQoJyNjb21tZW50c0NvbnRhaW5lcicpO1xuICAgIHZhciBsb2FkTW9yZWJ1dHRvbiA9ICQoJyNsb2FkTW9yZUJ1dHRvbicpO1xuICAgIFxuICAgIHZhciBzbHVnID0gJChjb21tZW50c0NvbnRhaW5lcikuZGF0YShzbHVnKTsgICAgXG4gICAgdmFyIHBhZ2luYXRvciA9ICQoY29tbWVudHNDb250YWluZXIpLmRhdGEocGFnaW5hdG9yKTtcblxuICAgIHZhciBudW1SZXN1bHRzID0gcGFnaW5hdG9yLnBhZ2luYXRvci5udW1SZXN1bHRzO1xuICAgIHZhciBwYWdlU2l6ZSA9IHBhZ2luYXRvci5wYWdpbmF0b3IucGFnZVNpemU7XG4gICAgdmFyIGN1cnJlbnRQYWdlID0gcGFnaW5hdG9yLnBhZ2luYXRvci5jdXJyZW50UGFnZTtcblxuICAgIG1heFBhZ2UgPSBudW1SZXN1bHRzIC8gcGFnZVNpemU7XG4gICAgdmFyIHBhZ2UgPSBjdXJyZW50UGFnZTtcblxuXG5cbiAgICBsb2FkTW9yZWJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGFnZSsrO1xuICAgICAgICBpZihwYWdlID49IG1heFBhZ2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQobG9hZE1vcmVidXR0b24pLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9maWd1cmUvXCIgKyBzbHVnLnNsdWcgKyBcIi9wYWdlL1wiICsgcGFnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJChjb21tZW50c0NvbnRhaW5lcikuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiJCIsImNvbW1lbnRzQ29udGFpbmVyIiwibG9hZE1vcmVidXR0b24iLCJzbHVnIiwiZGF0YSIsInBhZ2luYXRvciIsIm51bVJlc3VsdHMiLCJwYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwibWF4UGFnZSIsInBhZ2UiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhpZGUiLCJhamF4IiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=
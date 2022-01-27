(self["webpackChunk"] = self["webpackChunk"] || []).push([["loadMorePosts"],{

/***/ "./assets/loadMorePosts.js":
/*!*********************************!*\
  !*** ./assets/loadMorePosts.js ***!
  \*********************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/loadMorePosts.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZE1vcmVQb3N0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQUEsQ0FBQyxDQUFDLFlBQVc7QUFDVCxNQUFJQyxjQUFjLEdBQUdELENBQUMsQ0FBQyxpQkFBRCxDQUF0QjtBQUNBLE1BQUlFLGNBQWMsR0FBR0YsQ0FBQyxDQUFDLGlCQUFELENBQXRCO0FBRUEsTUFBSUcsU0FBUyxHQUFHSCxDQUFDLENBQUNFLGNBQUQsQ0FBRCxDQUFrQkUsSUFBbEIsQ0FBdUJELFNBQXZCLENBQWhCO0FBQ0EsTUFBSUUsVUFBVSxHQUFHRixTQUFTLENBQUNBLFNBQVYsQ0FBb0JFLFVBQXJDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHSCxTQUFTLENBQUNBLFNBQVYsQ0FBb0JHLFFBQW5DO0FBQ0EsTUFBSUMsV0FBVyxHQUFHSixTQUFTLENBQUNBLFNBQVYsQ0FBb0JJLFdBQXRDO0FBRUFDLEVBQUFBLE9BQU8sR0FBR0gsVUFBVSxHQUFHQyxRQUF2QjtBQUNBLE1BQUlHLElBQUksR0FBR0YsV0FBWDtBQUVBTCxFQUFBQSxjQUFjLENBQUNRLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBVUMsQ0FBVixFQUFhO0FBQ3BDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUgsSUFBQUEsSUFBSTs7QUFDSixRQUFHQSxJQUFJLElBQUlELE9BQVgsRUFDQTtBQUNJUixNQUFBQSxDQUFDLENBQUNFLGNBQUQsQ0FBRCxDQUFrQlcsSUFBbEI7QUFDSDs7QUFDRGIsSUFBQUEsQ0FBQyxDQUFDYyxJQUFGLENBQU87QUFDSEMsTUFBQUEsTUFBTSxFQUFFLEtBREw7QUFFSEMsTUFBQUEsR0FBRyxFQUFFLFdBQVdQLElBRmI7QUFHSFEsTUFBQUEsT0FIRyxtQkFHS0MsUUFITCxFQUdlO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FsQixRQUFBQSxDQUFDLENBQUNDLGNBQUQsQ0FBRCxDQUFrQm9CLE1BQWxCLENBQXlCSCxRQUF6QjtBQUNIO0FBTkUsS0FBUDtBQVFILEdBZkQ7QUFnQkgsQ0E1QkEsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9sb2FkTW9yZVBvc3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJChmdW5jdGlvbigpIHtcbiAgICB2YXIgcG9zdHNDb250YWluZXIgPSAkKCcjcG9zdHNDb250YWluZXInKTtcbiAgICB2YXIgbG9hZE1vcmVidXR0b24gPSAkKCcjbG9hZE1vcmVCdXR0b24nKTtcbiAgICBcbiAgICB2YXIgcGFnaW5hdG9yID0gJChsb2FkTW9yZWJ1dHRvbikuZGF0YShwYWdpbmF0b3IpO1xuICAgIHZhciBudW1SZXN1bHRzID0gcGFnaW5hdG9yLnBhZ2luYXRvci5udW1SZXN1bHRzO1xuICAgIHZhciBwYWdlU2l6ZSA9IHBhZ2luYXRvci5wYWdpbmF0b3IucGFnZVNpemU7XG4gICAgdmFyIGN1cnJlbnRQYWdlID0gcGFnaW5hdG9yLnBhZ2luYXRvci5jdXJyZW50UGFnZTtcbiAgICBcbiAgICBtYXhQYWdlID0gbnVtUmVzdWx0cyAvIHBhZ2VTaXplO1xuICAgIHZhciBwYWdlID0gY3VycmVudFBhZ2U7XG5cbiAgICBsb2FkTW9yZWJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGFnZSsrO1xuICAgICAgICBpZihwYWdlID49IG1heFBhZ2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQobG9hZE1vcmVidXR0b24pLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9wYWdlL1wiICsgcGFnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJChwb3N0c0NvbnRhaW5lcikuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiJCIsInBvc3RzQ29udGFpbmVyIiwibG9hZE1vcmVidXR0b24iLCJwYWdpbmF0b3IiLCJkYXRhIiwibnVtUmVzdWx0cyIsInBhZ2VTaXplIiwiY3VycmVudFBhZ2UiLCJtYXhQYWdlIiwicGFnZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGlkZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==
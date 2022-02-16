(self["webpackChunk"] = self["webpackChunk"] || []).push([["featured_images"],{

/***/ "./assets/components/featured_images.js":
/*!**********************************************!*\
  !*** ./assets/components/featured_images.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  var featuredImagesButton = $('a[data-featured');
  $(featuredImagesButton).each(function () {
    if ($(this).attr('data-featured') == 1) {
      $(this).addClass('btn-success');
    } else {
      $(this).addClass('btn-outline-success');
    }
  });

  function toggleFeatured() {
    $(featuredImagesButton).each(function () {
      if ($(this).attr('data-featured') == 1) {
        $(this).attr('data-featured', '').removeClass('btn-success').addClass('btn-outline-success');
        $.ajax({
          method: "PUT",
          url: "/featured_image/" + $(this).data('id'),
          success: function success(response) {
            console.log(response);
          },
          error: function error(response) {
            console.log(response);
          }
        });
      }
    });
  }

  $(featuredImagesButton).on('click', function (e) {
    e.preventDefault();
    toggleFeatured();
    $(this).attr('data-featured', 1).removeClass('btn-outline-success').addClass('btn-success');
    $.ajax({
      method: "PUT",
      url: "/featured_image/" + $(this).data('id'),
      success: function success(response) {
        console.log(response);
      },
      error: function error(response) {
        console.log(response);
      }
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/components/featured_images.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWRfaW1hZ2VzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUVSLE1BQUlDLG9CQUFvQixHQUFHRCxDQUFDLENBQUMsaUJBQUQsQ0FBNUI7QUFFQUEsRUFBQUEsQ0FBQyxDQUFDQyxvQkFBRCxDQUFELENBQXdCQyxJQUF4QixDQUE2QixZQUFVO0FBQ25DLFFBQUdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLGVBQWIsS0FBaUMsQ0FBcEMsRUFDQTtBQUNJSCxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFFBQVIsQ0FBaUIsYUFBakI7QUFDSCxLQUhELE1BS0E7QUFDSUosTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxRQUFSLENBQWlCLHFCQUFqQjtBQUNIO0FBQ0osR0FURDs7QUFXQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3RCTCxJQUFBQSxDQUFDLENBQUNDLG9CQUFELENBQUQsQ0FBd0JDLElBQXhCLENBQTZCLFlBQVk7QUFDckMsVUFBSUYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsZUFBYixLQUFpQyxDQUFyQyxFQUF3QztBQUNwQ0gsUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsZUFBYixFQUE4QixFQUE5QixFQUFrQ0csV0FBbEMsQ0FBOEMsYUFBOUMsRUFBNkRGLFFBQTdELENBQXNFLHFCQUF0RTtBQUNBSixRQUFBQSxDQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxVQUFBQSxNQUFNLEVBQUUsS0FETDtBQUVIQyxVQUFBQSxHQUFHLEVBQUUscUJBQXFCVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxJQUFiLENBRnZCO0FBR0hDLFVBQUFBLE9BSEcsbUJBR0tDLFFBSEwsRUFHZTtBQUNkQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILFdBTEU7QUFNSEcsVUFBQUEsS0FORyxpQkFNR0gsUUFOSCxFQU1hO0FBQ1pDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0g7QUFSRSxTQUFQO0FBVUg7QUFDSixLQWREO0FBZUg7O0FBRURaLEVBQUFBLENBQUMsQ0FBQ0Msb0JBQUQsQ0FBRCxDQUF3QmUsRUFBeEIsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBU0MsQ0FBVCxFQUNwQztBQUNJQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQWIsSUFBQUEsY0FBYztBQUVkTCxJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLElBQVIsQ0FBYSxlQUFiLEVBQThCLENBQTlCLEVBQWlDRyxXQUFqQyxDQUE2QyxxQkFBN0MsRUFBb0VGLFFBQXBFLENBQTZFLGFBQTdFO0FBRUFKLElBQUFBLENBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0hDLE1BQUFBLE1BQU0sRUFBRSxLQURMO0FBRUhDLE1BQUFBLEdBQUcsRUFBRSxxQkFBcUJULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLElBQWIsQ0FGdkI7QUFHSEMsTUFBQUEsT0FIRyxtQkFHS0MsUUFITCxFQUdlO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0gsT0FMRTtBQU1IRyxNQUFBQSxLQU5HLGlCQU1HSCxRQU5ILEVBTVk7QUFDWEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDSDtBQVJFLEtBQVA7QUFXSCxHQW5CRDtBQXNCSCxDQXZEQSxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZmVhdHVyZWRfaW1hZ2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgZmVhdHVyZWRJbWFnZXNCdXR0b24gPSAkKCdhW2RhdGEtZmVhdHVyZWQnKTtcblxuICAgICQoZmVhdHVyZWRJbWFnZXNCdXR0b24pLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdkYXRhLWZlYXR1cmVkJykgPT0gMSApXG4gICAgICAgIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdidG4tb3V0bGluZS1zdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZlYXR1cmVkKCkge1xuICAgICAgICAkKGZlYXR1cmVkSW1hZ2VzQnV0dG9uKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtZmVhdHVyZWQnKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLWZlYXR1cmVkJywgJycpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpLmFkZENsYXNzKCdidG4tb3V0bGluZS1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2ZlYXR1cmVkX2ltYWdlL1wiICsgJCh0aGlzKS5kYXRhKCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgJChmZWF0dXJlZEltYWdlc0J1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSlcbiAgICB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0b2dnbGVGZWF0dXJlZCgpO1xuICAgICAgICBcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLWZlYXR1cmVkJywgMSkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXN1Y2Nlc3MnKS5hZGRDbGFzcygnYnRuLXN1Y2Nlc3MnKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9mZWF0dXJlZF9pbWFnZS9cIiArICQodGhpcykuZGF0YSgnaWQnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcbiAgICAgICAgICAgICAgICBcblxufSk7Il0sIm5hbWVzIjpbIiQiLCJmZWF0dXJlZEltYWdlc0J1dHRvbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJ0b2dnbGVGZWF0dXJlZCIsInJlbW92ZUNsYXNzIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
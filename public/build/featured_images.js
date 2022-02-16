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
      }
    });
  }

  $(featuredImagesButton).on('click', function (e) {
    e.preventDefault();
    toggleFeatured();
    $(this).attr('data-featured', 1).removeClass('btn-outline-success').addClass('btn-success');
    $.ajax({
      method: "GET",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWRfaW1hZ2VzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUVSLE1BQUlDLG9CQUFvQixHQUFHRCxDQUFDLENBQUMsaUJBQUQsQ0FBNUI7QUFFQUEsRUFBQUEsQ0FBQyxDQUFDQyxvQkFBRCxDQUFELENBQXdCQyxJQUF4QixDQUE2QixZQUFVO0FBQ25DLFFBQUdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLGVBQWIsS0FBaUMsQ0FBcEMsRUFDQTtBQUNJSCxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFFBQVIsQ0FBaUIsYUFBakI7QUFDSCxLQUhELE1BS0E7QUFDSUosTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxRQUFSLENBQWlCLHFCQUFqQjtBQUNIO0FBQ0osR0FURDs7QUFXQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3RCTCxJQUFBQSxDQUFDLENBQUNDLG9CQUFELENBQUQsQ0FBd0JDLElBQXhCLENBQTZCLFlBQVk7QUFDckMsVUFBSUYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsZUFBYixLQUFpQyxDQUFyQyxFQUF3QztBQUNwQ0gsUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsZUFBYixFQUE4QixFQUE5QixFQUFrQ0csV0FBbEMsQ0FBOEMsYUFBOUMsRUFBNkRGLFFBQTdELENBQXNFLHFCQUF0RTtBQUNIO0FBQ0osS0FKRDtBQUtIOztBQUVESixFQUFBQSxDQUFDLENBQUNDLG9CQUFELENBQUQsQ0FBd0JNLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLFVBQVNDLENBQVQsRUFDcEM7QUFDSUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLElBQUFBLGNBQWM7QUFDZEwsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsZUFBYixFQUE4QixDQUE5QixFQUFpQ0csV0FBakMsQ0FBNkMscUJBQTdDLEVBQW9FRixRQUFwRSxDQUE2RSxhQUE3RTtBQUVBSixJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNIQyxNQUFBQSxNQUFNLEVBQUUsS0FETDtBQUVIQyxNQUFBQSxHQUFHLEVBQUUscUJBQXFCWixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLElBQVIsQ0FBYSxJQUFiLENBRnZCO0FBR0hDLE1BQUFBLE9BSEcsbUJBR0tDLFFBSEwsRUFHZTtBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILE9BTEU7QUFNSEcsTUFBQUEsS0FORyxpQkFNR0gsUUFOSCxFQU1ZO0FBQ1hDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0g7QUFSRSxLQUFQO0FBV0gsR0FqQkQ7QUFvQkgsQ0EzQ0EsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ZlYXR1cmVkX2ltYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIGZlYXR1cmVkSW1hZ2VzQnV0dG9uID0gJCgnYVtkYXRhLWZlYXR1cmVkJyk7XG5cbiAgICAkKGZlYXR1cmVkSW1hZ2VzQnV0dG9uKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCQodGhpcykuYXR0cignZGF0YS1mZWF0dXJlZCcpID09IDEgKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYnRuLW91dGxpbmUtc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVGZWF0dXJlZCgpIHtcbiAgICAgICAgJChmZWF0dXJlZEltYWdlc0J1dHRvbikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLWZlYXR1cmVkJykgPT0gMSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1mZWF0dXJlZCcsICcnKS5yZW1vdmVDbGFzcygnYnRuLXN1Y2Nlc3MnKS5hZGRDbGFzcygnYnRuLW91dGxpbmUtc3VjY2VzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICAkKGZlYXR1cmVkSW1hZ2VzQnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbihlKVxuICAgIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVGZWF0dXJlZCgpO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtZmVhdHVyZWQnLCAxKS5yZW1vdmVDbGFzcygnYnRuLW91dGxpbmUtc3VjY2VzcycpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6IFwiL2ZlYXR1cmVkX2ltYWdlL1wiICsgJCh0aGlzKS5kYXRhKCdpZCcpLFxuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuXG59KTsiXSwibmFtZXMiOlsiJCIsImZlYXR1cmVkSW1hZ2VzQnV0dG9uIiwiZWFjaCIsImF0dHIiLCJhZGRDbGFzcyIsInRvZ2dsZUZlYXR1cmVkIiwicmVtb3ZlQ2xhc3MiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunk"] = self["webpackChunk"] || []).push([["delete_images"],{

/***/ "./assets/components/delete_images.js":
/*!********************************************!*\
  !*** ./assets/components/delete_images.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

document.querySelectorAll('[data-delete]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();

    if (confirm("Voulez-vous supprimer cette image ?")) {
      fetch(a.getAttribute('href'), {
        method: 'DELETE',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          '_token': a.dataset.token
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          a.parentNode.parentNode.remove();
        } else {
          alert(data.error);
        }
      })["catch"](function (e) {
        return alert(e);
      });
    }
  });
}); // window.onload = () => {
//     // Gestion des boutons "Supprimer"
//     let links = document.querySelectorAll("[data-delete]")
//     // On boucle sur links
//     for (link of links) {
//         // On écoute le clic
//         link.addEventListener("click", function (e) {
//             // On empêche la navigation
//             e.preventDefault()
//             // On demande confirmation
//             if (confirm("Voulez-vous supprimer cette image ?")) {
//                 // On envoie une requête Ajax vers le href du lien avec la méthode DELETE
//                 fetch(this.getAttribute("href"), {
//                     method: "DELETE",
//                     headers: {
//                         "X-Requested-With": "XMLHttpRequest",
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({ "_token": this.dataset.token })
//                 }).then(
//                     // On récupère la réponse en JSON
//                     response => response.json()
//                 ).then(data => {
//                     if (data.success)
//                         this.parentElement.remove()
//                     else
//                         alert(data.error)
//                 }).catch(e => alert(e))
//             }
//         })
//     }
// }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--af0231","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_pro-54b034"], () => (__webpack_exec__("./assets/components/delete_images.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlX2ltYWdlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQUFDLENBQUMsRUFBSTtBQUNwREEsRUFBQUEsQ0FBQyxDQUFDQyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixVQUFBQyxDQUFDLEVBQUk7QUFDN0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJQyxPQUFPLENBQUMscUNBQUQsQ0FBWCxFQUFvRDtBQUVoREMsTUFBQUEsS0FBSyxDQUFDTCxDQUFDLENBQUNNLFlBQUYsQ0FBZSxNQUFmLENBQUQsRUFBeUI7QUFDMUJDLFFBQUFBLE1BQU0sRUFBRSxRQURrQjtBQUUxQkMsUUFBQUEsT0FBTyxFQUFFO0FBQ0wsOEJBQW9CLGdCQURmO0FBRUwsMEJBQWdCO0FBRlgsU0FGaUI7QUFNMUJDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRSxvQkFBVVgsQ0FBQyxDQUFDWSxPQUFGLENBQVVDO0FBQXRCLFNBQWY7QUFOb0IsT0FBekIsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsT0FQaEIsRUFRS0YsSUFSTCxDQVFVLFVBQUFHLElBQUksRUFBSTtBQUNWLFlBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNkbEIsVUFBQUEsQ0FBQyxDQUFDbUIsVUFBRixDQUFhQSxVQUFiLENBQXdCQyxNQUF4QjtBQUNILFNBRkQsTUFFTztBQUNIQyxVQUFBQSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssS0FBTixDQUFMO0FBQ0g7QUFDSixPQWRMLFdBZVcsVUFBQXBCLENBQUM7QUFBQSxlQUFJbUIsS0FBSyxDQUFDbkIsQ0FBRCxDQUFUO0FBQUEsT0FmWjtBQWdCSDtBQUNKLEdBckJEO0FBc0JILENBdkJELEdBd0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kZWxldGVfaW1hZ2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlbGV0ZV0nKS5mb3JFYWNoKGEgPT4ge1xuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChjb25maXJtKFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIGNldHRlIGltYWdlID9cIikpIHtcbiAgICAgICAgXG4gICAgICAgICAgICBmZXRjaChhLmdldEF0dHJpYnV0ZSgnaHJlZicpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAnX3Rva2VuJzogYS5kYXRhc2V0LnRva2VuIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGFsZXJ0KGUpKVxuICAgICAgICB9XG4gICAgfSlcbn0pXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuLy8gICAgIC8vIEdlc3Rpb24gZGVzIGJvdXRvbnMgXCJTdXBwcmltZXJcIlxuLy8gICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kZWxldGVdXCIpXG5cbi8vICAgICAvLyBPbiBib3VjbGUgc3VyIGxpbmtzXG4vLyAgICAgZm9yIChsaW5rIG9mIGxpbmtzKSB7XG4vLyAgICAgICAgIC8vIE9uIMOpY291dGUgbGUgY2xpY1xuLy8gICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICAgICAgLy8gT24gZW1ww6pjaGUgbGEgbmF2aWdhdGlvblxuLy8gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbi8vICAgICAgICAgICAgIC8vIE9uIGRlbWFuZGUgY29uZmlybWF0aW9uXG4vLyAgICAgICAgICAgICBpZiAoY29uZmlybShcIlZvdWxlei12b3VzIHN1cHByaW1lciBjZXR0ZSBpbWFnZSA/XCIpKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gT24gZW52b2llIHVuZSByZXF1w6p0ZSBBamF4IHZlcnMgbGUgaHJlZiBkdSBsaWVuIGF2ZWMgbGEgbcOpdGhvZGUgREVMRVRFXG4vLyAgICAgICAgICAgICAgICAgZmV0Y2godGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbi8vICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJfdG9rZW5cIjogdGhpcy5kYXRhc2V0LnRva2VuIH0pXG4vLyAgICAgICAgICAgICAgICAgfSkudGhlbihcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gT24gcsOpY3Vww6hyZSBsYSByw6lwb25zZSBlbiBKU09OXG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxuLy8gICAgICAgICAgICAgICAgICkudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuLy8gICAgICAgICAgICAgICAgICAgICBlbHNlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLmVycm9yKVxuLy8gICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4gYWxlcnQoZSkpXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25maXJtIiwiZmV0Y2giLCJnZXRBdHRyaWJ1dGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwiYWxlcnQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=
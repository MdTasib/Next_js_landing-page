webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "F:\\next_js_landing_page\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      _ref$data$buttonText = _ref$data.buttonText,
      buttonText = _ref$data$buttonText === void 0 ? 'Start Free Trial' : _ref$data$buttonText,
      anotherOption = _ref$data.anotherOption,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? 'package__card active' : 'package__card',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, description)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, priceWithUnit, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "/Monthly"))));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0
      }
    }
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: "5px",
    right: '25px',
    letterSpacing: '-.14px',
    px: '12px'
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading'
    },
    '.package__name': {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal'
    }
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'secondary',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0'
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0hlYWRlciIsImxpc3RJdGVtIiwicHJpY2luZ0JveCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJyaWdodCIsImxldHRlclNwYWNpbmciLCJweCIsIm1hcmdpbkJvdHRvbSIsInByaWNlIiwicHQiLCJwbCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJidXR0b24iLCJidXR0b25Hcm91cCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQVVaO0FBQUEsdUJBVERDLElBU0M7QUFBQSxNQVJDQyxNQVFELGFBUkNBLE1BUUQ7QUFBQSxNQVBDQyxJQU9ELGFBUENBLElBT0Q7QUFBQSxNQU5DQyxXQU1ELGFBTkNBLFdBTUQ7QUFBQSxNQUxDQyxhQUtELGFBTENBLGFBS0Q7QUFBQSx1Q0FKQ0MsVUFJRDtBQUFBLE1BSkNBLFVBSUQscUNBSmMsa0JBSWQ7QUFBQSxNQUhDQyxhQUdELGFBSENBLGFBR0Q7QUFBQSxNQUZDQyxNQUVELGFBRkNBLE1BRUQ7QUFDRCxTQUNFLE1B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YUFBUyxFQUFFLFFBRkg7QUFHUmYsY0FBVSxFQUFFLFFBSEo7QUFJUkMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKRjtBQUtSQyxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQUxKO0FBTVJkLE1BQUUsRUFBRSxDQU5JO0FBT1JnQixjQUFVLEVBQUUsWUFQSjtBQVFSRSxTQUFLLEVBQUUsTUFSQztBQVNSLGdCQUFZO0FBQ1ZSLGFBQU8sRUFBRSxJQURDO0FBRVZrQixZQUFNLEVBQUU7QUFDTlYsYUFBSyxFQUFFO0FBREQ7QUFGRTtBQVRKLEdBOUVHO0FBOEZiVyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFLFFBREE7QUFFWDdCLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUZPO0FBR1gsb0JBQWdCO0FBQ2RpQixXQUFLLEVBQUUsV0FETztBQUVkbkIsV0FBSyxFQUFFLE1BRk87QUFHZGtCLG9CQUFjLEVBQUUsUUFIRjtBQUlkTCxnQkFBVSxFQUFFLEdBSkU7QUFLZEMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FMSTtBQU1kZixPQUFDLEVBQUU7QUFOVztBQUhMO0FBOUZBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGY3NWEwOGYzMWZjOWNlMjA5YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XG4gIGRhdGE6IHtcbiAgICBoZWFkZXIsXG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcmljZVdpdGhVbml0LFxuICAgIGJ1dHRvblRleHQgPSAnU3RhcnQgRnJlZSBUcmlhbCcsXG4gICAgYW5vdGhlck9wdGlvbixcbiAgICBwb2ludHMsXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyID8gJ3BhY2thZ2VfX2NhcmQgYWN0aXZlJyA6ICdwYWNrYWdlX19jYXJkJ31cbiAgICA+XG4gICAgICB7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XG4gICAgICA8Qm94PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT0ncGFja2FnZV9faGVhZGVyJyBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT0ncGFja2FnZV9fbmFtZScgdmFyaWFudD0ndGl0bGUnPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPSdwJz57ZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPExpc3QgaXRlbXM9e3BvaW50c30gY2hpbGRTdHlsZT17c3R5bGVzLmxpc3RJdGVtfSAvPlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BhY2thZ2VfX3ByaWNlJyBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxuICAgICAgICAgIHtwcmljZVdpdGhVbml0fVxuICAgICAgICAgIDxzcGFuPi9Nb250aGx5PC9zcGFuPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcHJpY2luZ0JveDoge1xuICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICBwOiBbJzM1cHggMjVweCcsIG51bGwsIG51bGwsICc0MHB4J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc3NSUnLCAnMTAwJSddLFxuICAgIG1iOiAnNDBweCcsXG4gICAgbXQ6ICc0MHB4JyxcbiAgICBteDogWzAsICdhdXRvJywgMF0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMHB4IDRweCAyNXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSkgIWltcG9ydGFudCcsXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGhlaWdodDogWycyOHB4JywgbnVsbCwgbnVsbCwgJzMycHgnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogXCI1cHhcIixcbiAgICByaWdodDogJzI1cHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctLjE0cHgnLFxuICAgIHB4OiAnMTJweCcsXG4gIH0sXG4gIHByaWNpbmdIZWFkZXI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYjogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnXSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgICcucGFja2FnZV9fbmFtZSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxuICAgIH0sXG4gIH0sXG4gIHByaWNlOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgJzMwcHgnXSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC41NXB4JyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIG1hcmdpbkJvdHRvbTogMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHB0OiBbNCwgNl0sXG4gICAgJz4gc3Bhbic6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcGw6ICczcHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjc1LCAxLjZdLFxuICAgIG1iOiAzLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgICcmLmNsb3NlZCc6IHtcbiAgICAgIG9wYWNpdHk6IDAuNTUsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgY29sb3I6ICcjNzg4RkI1JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uR3JvdXA6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG10OiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCddLFxuICAgICcuZnJlZV9fdHJhaWwnOiB7XG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIDFdLFxuICAgICAgcDogJzIwcHggMCAwJyxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
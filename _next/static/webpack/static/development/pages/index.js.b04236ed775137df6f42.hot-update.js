webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/util.js */ "./lib/util.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/bjarki/nwerc2020/nwerc.is/Website-2021/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var news = [// Newest at the top
// {
//   title: 'Final standings and open contest',
//   published: 'April 2, 2021',
//   content: pug`
//     p It's our pleasure to announce that all appeals have been resolved and the #[a(href="/standings") NWERC 2020 standings] have been finalized without any changes. Congratulations again to the NWERC 2020 Champions, Los Patrons from the University of Oxford, as well as all our medalists.
//     p All the contest materials have been published on our #[Link(href="/") #[a website]], including the problem set, solution slides, test data and judges' solutions. Also worth mentioning is that this Saturday, April 3rd, at 12:00 GMT+0 we will be hosting an open version of NWERC 2020 on #[a(href="https://open.kattis.com/contests/nwerc2020open") Open Kattis].
//     p In a few weeks we will start our preparations for NWERC 2021 which is set to take place in an online or distributed setting at the end of this year. If you are a coach or contestant that has competed in NWERC for the last time, and are interested in receiving the NWERC 2021 Call for Problems, please send an email to #[Email(address="bjarki@nwerc.eu")] titled "Call for Problems signup".
//     p Thank you all for a great contest last weekend - we look forward to seeing you all again at NWERC 2021. Last but not least we would like to thank our sponsors, #[a(href="https://www.huawei.com/en/") Huawei], #[a(href="https://www.jetbrains.com/") Jetbrains], #[a(href="http://www.awseducate.com/") AWS Educate] and #[a(href="https://en.ru.is/") Reykjavík University] for making this event possible! You can find more information about them on our #[Link(href="/partners") #[a sponsors]] page.
//   `,
// },
// {
//   title: 'Friday update',
//   published: 'March 26, 2021',
//   content: pug`
//     p Tomorrow is the day of the practice session. A link to the livestream will be posted on the website tomorrow morning.
//     p A few notes about the format this weekend:
//       ul
//           li The judges have published a #[a(href="https://www.nwerc.eu/files/hints.pdf") document] with advice, hints, and general information about the contests this weekend. Contestants are asked to read it in full as it contains important new information, in particular about the inclusion of interactive problems this year.
//           li Public standings for the contests can be found at #[a(href="https://standings.nwerc.is/") https://standings.nwerc.is/].
//           li Due to the online nature of the contest this year, we have decided not to hold a simultaneous open contest, and to keep the problemset private until after the contest.
//           li Instead, a separate public contest will be held on #[a(href="https://open.kattis.com") Open Kattis] on Saturday, April 3rd.
//   `,
// },
// {
//   title: 'Registration and updates',
//   published: 'February 14, 2021',
//   content: pug`
//     p The NWERC 2020 registration has now been #[Link(href="/registration") #[a opened]] with a deadline of #[b March 16th]. The site has also been updated as we transition to a fully online contest. In particular:
//       ul
//           li The #[Link(href="/registration") #[a registration]] page now contains registration instructions.
//           li The #[Link(href="/rules") #[a contest rules]] have been updated to take the online format into account.
//           li The #[Link(href="/schedule") #[a schedule]] page now contains the preliminary schedule.
//           li System information has been added to our #[Link(href="/system") #[a judging]] page.
//           li A #[Link(href="/vm") #[a virtual contest environment]] is now available. Note that its use during the contest is optional.
//   `,
// },
// {
//   title: 'COVID-19 update',
//   published: 'August 30, 2020',
//   content: pug`
//     p.
//       In light of the ongoing pandemic, the decision has been made not to
//       host the 2020 edition of NWERC onsite at Reykjavík University. Instead,
//       planning is underway for a distributed contest during the first quarter
//       of 2021, with local contest sites across the region. We are actively
//       looking for volunteers and points of contact for participating
//       universities and countries to help us make the contest become a
//       reality. Read the #[a(href="/covid-update") full announcement] and
//       reach out to us at #[a(href="mailto:contact@nwerc.eu") contact@nwerc.eu].
//   `,
// },
{
  title: 'Contest format update',
  published: 'September 19, 2021',
  content: __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 1
    }
  }, "After much deliberation we - the NWERC 2021 organizers - have concluded", "\n", "that is still not feasible for us to host a safe onsite NWERC this", "\n", "November. To keep the contest safe and fair we will be repeating last", "\n", "year's online format", "\n", "\n", "decided", "\n", "to repeat the fully online format from last year.", "\n", "\n", "We are pleased to announce the Call for Problems (CfP) for the 2021", "\n", "edition of the NWERC programming contest. The deadline for submitting", "\n", "candidate problems is ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 1
    }
  }, "July 11, 2021"), ". Information about the submission", "\n", "requirements and procedures can be found on our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cfp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 1
    }
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 1
    }
  }, "CfP page")), ".")
}, {
  title: 'Call for Problems announced',
  published: 'May 7, 2021',
  content: __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 1
    }
  }, "We are pleased to announce the Call for Problems (CfP) for the 2021", "\n", "edition of the NWERC programming contest. The deadline for submitting", "\n", "candidate problems is ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 1
    }
  }, "July 11, 2021"), ". Information about the submission", "\n", "requirements and procedures can be found on our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cfp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 1
    }
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 1
    }
  }, "CfP page")), ".")
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ruBanner: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 1
    }
  }, "Welcome"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 1
    }
  }, "Welcome to the website for the Northwestern Europe Regional", "\n", "Contest 2021 (NWERC). NWERC 2021 is hosted by Reykjav\xEDk", "\n", "University in Iceland."), __jsx("p", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 1
    }
  }, "NWERC 2021 is an official regional contest in the", "\n", __jsx("a", {
    href: "https://icpc.baylor.edu/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 1
    }
  }, "ACM International Collegiate Programming Contest"), ".", "\n", "It draws students from colleges and universities throughout", "\n", "Belgium, Denmark, Estonia, Finland, Germany, Great Britain,", "\n", "Iceland, Ireland, Lithuania, Luxembourg, the Netherlands, Norway and", "\n", "Sweden. The top teams will advance to the ACM ICPC World Finals."), news.map(function (news_item) {
    return [__jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 1
      }
    }, news_item.title), __jsx("h4", {
      className: "published flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 1
      }
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "mt-bump h-4 w-4 fill-current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 1
      }
    }, __jsx("path", {
      d: "M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 1
      }
    })), __jsx("span", {
      className: "ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 1
      }
    }, news_item.published)), news_item.content];
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.b04236ed775137df6f42.hot-update.js.map
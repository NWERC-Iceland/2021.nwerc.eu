webpackHotUpdate("static/development/pages/system.js",{

/***/ "./pages/system.js":
/*!*************************!*\
  !*** ./pages/system.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bjarki/nwerc/nwerc.is/Website-2021/pages/system.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }
  }, "Contest control system"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }
  }, "During the contest, teams will submit proposed solutions to the contest", "\n", "problems to the judges using the Kattis contest control system. The", "\n", "team manual for Kattis can be found", "\n", __jsx("a", {
    href: "/files/kattis-team-guide.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 1
    }
  }, "here"), ".", "\n"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 1
    }
  }, "Compilation of submissions"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }, "Source files submitted to the judges will be compiled using the following command line arguments for the respective language:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, "C (GCC 10.3.0)", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, "gcc -g -O2 -std=gnu17 -static {files} -lm"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, "C++ (GCC 10.3.0)", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, "g++ -g -O2 -std=gnu++20 -static {files}"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, "Java 11 (OpenJDK, Java 11.0.11)", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, "javac -encoding UTF-8 -sourcepath . -d . {files}"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }, "Python 3 (PyPy3 7.3.3, Python 3.6.12)", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }, "pypy3 -m py_compile {files}"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }, "Kotlin (1.4.21)", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }, "kotlinc -d . {files}"))))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 1
    }
  }, "The \"{files}\" in the above commands represents the list of source files from the submission which will actually be compiled. Files with the following suffixes (and only files with these suffixes) will be submitted to the compiler:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 1
    }
  }, "For C submissions: .c"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 1
    }
  }, "For C++ submissions: .cc. .C, .cpp, .cxx, or .c++"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 1
    }
  }, "For Java submissions: .java"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 1
    }
  }, "For Python submissions: .py"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 1
    }
  }, "For Kotlin submissions: .kt"))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 1
    }
  }, "Execution of submissions"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }, "For each language, if the above compilation step is successful then the submission will be executed as follows:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 1
    }
  }, "For C/C++: the executable file generated by the compiler will be executed to generate the output of the submission."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }, "For Java: the compiled main class will be executed using the following command:", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }, "java -Dfile.encoding=UTF-8 -XX:+UseSerialGC -Xss128m -Xms1856m -Xmx1856m"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }, "For Python 3: the main source file will be executed by the PyPy3 interpreter to generate the output of the submission."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }, "For Kotlin: the compiled main class will be executed using the following command:", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }, "kotlin -Dfile.encoding=UTF-8 -J-XX:+UseSerialGC -J-Xss128m -J-Xms1856m -J-Xmx1856m"))))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 1
    }
  }, "Execution as described above will take place in a \"sandbox\". The", "\n", "sandbox will allocate 2GB of memory; the entire program, including its", "\n", "runtime environment, must execute within this memory limit. For", "\n", "interpreted languages (Java, Python, and Kotlin) the runtime", "\n", "environment includes the interpreter (that is, the JVM for Java/Kotlin", "\n", "and the Python interpreter for Python).", "\n"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 1
    }
  }, "The sandbox memory allocation size will be the same for all languages", "\n", "and all contest problems. For Java and Kotlin, the above command shows", "\n", "the stack size and heap size settings which will be used when the", "\n", "program is run in the sandbox. For C, C++, and Python, the heap and", "\n", "stack sizes are limited only by the total amount of memory available in", "\n", "the sandbox."));
});

/***/ })

})
//# sourceMappingURL=system.js.4d31820481d1c27c8239.hot-update.js.map
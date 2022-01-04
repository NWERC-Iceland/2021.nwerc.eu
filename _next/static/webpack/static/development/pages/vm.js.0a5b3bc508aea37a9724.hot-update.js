webpackHotUpdate("static/development/pages/vm.js",{

/***/ "./pages/vm.js":
/*!*********************!*\
  !*** ./pages/vm.js ***!
  \*********************/
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
var _jsxFileName = "/home/bjarki/nwerc/nwerc.is/Website-2021/pages/vm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }
  }, "Virtual contest environment"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 1
    }
  }, "This year a virtual contest environment will be provided to contestants", "\n", "in the form of an OVA Virtual Machine. It is based on Ubuntu 21.04, and", "\n", "contains the exact same compiler versions as those used on the judge", "\n", "machines, as well as a number of editors, IDEs, and other common", "\n", "programming tools. Its use is ", __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 1
    }
  }, "completely optional"), " and only", "\n", "provided as a convenience.", "\n"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }, "Download"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, "The OVA for the virtual contest environment can be downloaded here:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, __jsx("a", {
    href: "https://nwerc-is-vm.s3.eu-central-1.amazonaws.com/nwerc2021-vm-0.2.0.ova",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, "nwerc2021-vm-0.2.0.ova"), " (4.9GB, sha1: ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }, "5f8e73a44bb524fd10fb481941d96b9db9ae1f97"), ")"))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 1
    }
  }, "Usage"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 1
    }
  }, "Make sure you have at least 20GB of free space on your computer, or more to be safe.", "\n", "Import the OVA file into ", __jsx("a", {
    href: "https://www.virtualbox.org/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 1
    }
  }, "VirtualBox"), "\n", "or another hypervisor of your choice. Start the ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, "nwerc2021-vm"), "\n", "virtual machine and you will be automatically logged in as the ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 1
    }
  }, "team"), "\n", "user. The user has ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }
  }, "sudo"), " privileges, and its password is ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }
  }, "team"), ".", "\n", "See below for ", __jsx("a", {
    href: "#faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }, "frequently asked questions"), ".", "\n"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 1
    }
  }, "Software"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 1
    }
  }, "In addition to the compilers and interpreters listed on the", "\n", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/system",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 1
    }
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 1
    }
  }, "Judging")), " page, as well as reference documentation", "\n", "for all five submission languages, the virtual contest environment also", "\n", "includes the following software.", "\n"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 1
    }
  }, "Editors"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 1
    }
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 1
    }
  }, "Atom 1.53.0"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 1
    }
  }, "CLion 2020.3.1"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 1
    }
  }, "Code::Blocks 20.03"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 1
    }
  }, "Eclipse 4.18.0 (with CDT)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }
  }, "Emacs 27.1"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 1
    }
  }, "Geany 1.37.1"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }, "Gedit 3.38.1"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }, "IntelliJ IDEA 2020.3.1 (Community Edition)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 1
    }
  }, "Kate 20.12.3"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 1
    }
  }, "Neovim 0.4.4"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }, "Pluma 1.24.2"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 1
    }
  }, "PyCharm 2020.3.2 (Community Edition)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 1
    }
  }, "Sublime Text 4121"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 1
    }
  }, "Vim/GVim 8.2"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 1
    }
  }, "Visual Studio Code 1.61.2"))), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 1
    }
  }, "Terminals"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 1
    }
  }, "Byobu Terminal 5.133"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 1
    }
  }, "GNOME Terminal 3.38.1"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  }, "XTerm 371"))), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 1
    }
  }, "Scripting"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 1
    }
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 1
    }
  }, "Idle 3.9.4"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 1
    }
  }, "ipython3 7.20.0"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 1
    }
  }, "Perl 5.32.0 (not as a submission language!)"))), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 1
    }
  }, "Debuggers"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 1
    }
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 1
    }
  }, "DDD 3.3.12"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 1
    }
  }, "gdb 10.1.90"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 1
    }
  }, "JUnit 3.8.2"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 1
    }
  }, "Valgrind 3.17.0"))), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 1
    }
  }, "Utilities"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 1
    }
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 1
    }
  }, "Git 2.30.2"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 1
    }
  }, "Screen 4.08.00"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 1
    }
  }, "Tmux 3.1c"))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 1
    }
  }, "Commands"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 1
    }
  }, "The virtual contest environment includes a few helper commands to invoke the compilers and interpreters with appropriate command-line flags, as specified above. They are:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 1
    }
  }, "mygcc")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 1
    }
  }, "myg++")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 1
    }
  }, "myjavac"), ", ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 1
    }
  }, "myjava")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 1
    }
  }, "mypython")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 1
    }
  }, "mykotlinc"), ", ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 1
    }
  }, "mykotlin")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 1
    }
  }, __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 1
    }
  }, "submit")))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 1
    }
  }, "Note that the included editors and IDEs may not use the same compiler", "\n", "configuration by default.", "\n"), __jsx("h3", {
    id: "faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 1
    }
  }, "Frequently asked questions"), __jsx("div", {
    className: "faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 1
    }
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 1
    }
  }, "Q: My favorite editor is missing, what do I do?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 1
    }
  }, "A: The ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 1
    }
  }, "team"), " user has full superuser privileges on the virtual", "\n", "machine. You are free to make any modifications and install any", "\n", "software you require. Just run ", __jsx("tt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 1
    }
  }, "sudo apt install some-package"), ".", "\n"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 1
    }
  }, "Q: Why am I getting E_INVALIDARG (0x80070057) when I run the virtual machine?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 1
    }
  }, "A: You might not have enough free disk space. Make sure you have at", "\n", "least 20GB, or even 30-40GB to be on the safe side.", "\n"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 1
    }
  }, "Q: Why is the screen resolution so small?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 1
    }
  }, "A: Screen resolution and scaling can be configured under View > Virtual Screen 1.", "\n"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 1
    }
  }, "Q: Why is the virtual machine so slow? Why is the screen black?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 1
    }
  }, "A: Try increasing the Video Memory (found under Settings > Display", "\n", "after powering off the virtual machine) to 64MB or more.", "\n"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 1
    }
  }, "Q: My question is not answered above, what do I do?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 1
    }
  }, "A: Contact ", __jsx(_lib_util_js__WEBPACK_IMPORTED_MODULE_3__["Email"], {
    address: "technical@nwerc.eu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 1
    }
  }), ".", "\n")), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 1
    }
  }, "Changelog"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 1
    }
  }, "Version 0.2.0"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 1
    }
  }, "Initial version"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, "Known bugs:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 1
    }
  }, "mygcc and myg++ have incorrect flags"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, "CLion license is expired"))))));
});

/***/ })

})
//# sourceMappingURL=vm.js.0a5b3bc508aea37a9724.hot-update.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Main.js":
/*!************************************!*\
  !*** ./src/app/components/Main.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _comps_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps.module.css */ \"(app-pages-browser)/./src/app/components/comps.module.css\");\n/* harmony import */ var _comps_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_comps_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"(app-pages-browser)/./src/app/components/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/components/Spinner.js\");\n/* harmony import */ var _ErrorFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorFetch */ \"(app-pages-browser)/./src/app/components/ErrorFetch.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _api_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/route */ \"(app-pages-browser)/./src/app/api/route.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [champs, setChamps] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [todosCamp, setTdsCamp] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [textBusca, setTextB] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isError, setIsE] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getChamp = async ()=>{\n            try {\n                const response = await fetch(\"../api/route\");\n                const data = await response.json();\n                setChamps(data);\n                setTdsCamp(data);\n            } catch (e) {\n                setIsE(true);\n            }\n        };\n        getChamp();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...champs\n        ].sort((a, b)=>a.nome.localeCompare(b.nome));\n        setChamps(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...champs\n        ].sort((a, b)=>b.nome.localeCompare(a.nome));\n        setChamps(listAux);\n    };\n    const orderPriceH = ()=>{\n        const listAux = [\n            ...champs\n        ].sort((a, b)=>a.preco - b.preco);\n        setChamps(listAux);\n    };\n    const orderPriceL = ()=>{\n        const listAux = [\n            ...champs\n        ].sort((a, b)=>b.preco - a.preco);\n        setChamps(listAux);\n    };\n    const busca = (text)=>{\n        setTextB(text);\n        if (text.trim() == \"\") {\n            setChamps(todosCamp);\n            return;\n        }\n        const newList = champs.filter((prod)=>prod.nome.toUpperCase().trim().includes(textBusca.toUpperCase()));\n        setChamps(newList);\n    };\n    if (isError == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n            lineNumber: 68,\n            columnNumber: 15\n        }, this);\n    }\n    // if (todosCamp[0] == null){\n    //   return <Spinner/>\n    // }\n    console.log(champs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_comps_module_css__WEBPACK_IMPORTED_MODULE_1___default().filters),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: textBusca,\n                                placeholder: \"Pesquise um produto\",\n                                onChange: (event)=>busca(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderAz,\n                                children: \" Az \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \" Za \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                            lineNumber: 87,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceH,\n                            children: \" Pre\\xe7o Maior-Menor \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                            lineNumber: 91,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceL,\n                            children: \" Pre\\xe7o Menor-Maior \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                            lineNumber: 95,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 77,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_comps_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n                children: [\n                    champs.map((campeao)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_comps_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_comps_module_css__WEBPACK_IMPORTED_MODULE_1___default().titulo),\n                                    children: campeao.nome\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    width: 300,\n                                    height: 300,\n                                    src: campeao.imagem\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        campeao.preco,\n                                        \" Ciscos Azuis\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_comps_module_css__WEBPACK_IMPORTED_MODULE_1___default().desc),\n                                    children: campeao.descricao.slice(0, 15) + \"...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    href: \"/campeao/\" + campeao.id,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Ver Mais\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 12\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 10\n                                }, this)\n                            ]\n                        }, campeao.id, true, {\n                            fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                            lineNumber: 102,\n                            columnNumber: 8\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 116,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Guilherme Corneto\\\\Desktop\\\\ProjetoFinal-PTAC3-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"VyOXGCXEtRtjdK1kFSSMXN2v7Pc=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ1I7QUFDQTtBQUNhO0FBQ1o7QUFDTTtBQUNUO0FBQ2E7QUFDM0IsU0FBU1M7O0lBRXRCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ1EsV0FBV0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsV0FBV0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLFNBQVNDLE9BQU8sR0FBR2IsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFFO1FBRVQsTUFBTWUsV0FBVztZQUNmLElBQUc7Z0JBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDWCxVQUFVVTtnQkFDVlIsV0FBV1E7WUFDYixFQUNBLFVBQUs7Z0JBQ0hKLE9BQU87WUFDVDtRQUFDO1FBRURDO0lBQ0QsR0FBRyxFQUFFO0lBRU4sTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSWQ7U0FBTyxDQUFDZSxJQUFJLENBQUMsQ0FBQ0MsR0FBRUMsSUFBTUQsRUFBRUUsSUFBSSxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLElBQUk7UUFDckVqQixVQUFVYTtJQUNaO0lBRUEsTUFBTU0sVUFBVTtRQUNkLE1BQU1OLFVBQVU7ZUFBSWQ7U0FBTyxDQUFDZSxJQUFJLENBQUMsQ0FBQ0MsR0FBRUMsSUFBTUEsRUFBRUMsSUFBSSxDQUFDQyxhQUFhLENBQUNILEVBQUVFLElBQUk7UUFDckVqQixVQUFVYTtJQUNaO0lBRUEsTUFBTU8sY0FBYztRQUNsQixNQUFNUCxVQUFVO2VBQUlkO1NBQU8sQ0FBQ2UsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQU0sRUFBR0ssS0FBSyxHQUFLTCxFQUFFSyxLQUFLO1FBQzlEckIsVUFBVWE7SUFDWjtJQUVBLE1BQU1TLGNBQWM7UUFDbEIsTUFBTVQsVUFBVTtlQUFJZDtTQUFPLENBQUNlLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUFNLEVBQUdLLEtBQUssR0FBS04sRUFBRU0sS0FBSztRQUM5RHJCLFVBQVVhO0lBQ1o7SUFFQyxNQUFNVSxRQUFRLENBQUNDO1FBQ2RwQixTQUFTb0I7UUFFVCxJQUFHQSxLQUFLQyxJQUFJLE1BQU0sSUFBRztZQUNqQnpCLFVBQVVDO1lBQ1o7UUFDRjtRQUNBLE1BQU15QixVQUFVM0IsT0FBTzRCLE1BQU0sQ0FBQyxDQUFDQyxPQUM3QkEsS0FBS1gsSUFBSSxDQUFDWSxXQUFXLEdBQUdKLElBQUksR0FBR0ssUUFBUSxDQUFDM0IsVUFBVTBCLFdBQVc7UUFFL0Q3QixVQUFVMEI7SUFFWDtJQUVBLElBQUdyQixXQUFXLE1BQUs7UUFDZixxQkFBTyw4REFBQ1YsbURBQVVBOzs7OztJQUN0QjtJQUVELDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsSUFBSTtJQUNKb0MsUUFBUUMsR0FBRyxDQUFDakM7SUFDVixxQkFDQTs7MEJBQ0EsOERBQUNrQztnQkFBSUMsV0FBWTdDLGtFQUFjOztrQ0FDM0IsOERBQUM0Qzs7MENBQ0MsOERBQUNHO2dDQUFNQyxNQUFLO2dDQUFPQyxPQUFPbkM7Z0NBQVdvQyxhQUFZO2dDQUNqREMsVUFBVSxDQUFDQyxRQUFVbEIsTUFBTWtCLE1BQU1DLE1BQU0sQ0FBQ0osS0FBSzs7Ozs7OzBDQUU1Qyw4REFBQ0s7Z0NBQU9DLFNBQVVoQzswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUkvQiw4REFBQ3FCO2tDQUNFLDRFQUFDVTs0QkFBT0MsU0FBVXpCO3NDQUFVOzs7Ozs7Ozs7OztrQ0FHL0IsOERBQUNjO2tDQUNFLDRFQUFDVTs0QkFBT0MsU0FBVXhCO3NDQUFjOzs7Ozs7Ozs7OztrQ0FHbkMsOERBQUNhO2tDQUNFLDRFQUFDVTs0QkFBT0MsU0FBVXRCO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckMsOERBQUN1QjtnQkFBS1gsV0FBVzdDLCtEQUFXOztvQkFFM0JVLE9BQU8rQyxHQUFHLENBQUMsQ0FBQ0Msd0JBRVosOERBQUNkOzRCQUFJQyxXQUFXN0MsK0RBQVc7OzhDQUN6Qiw4REFBQzREO29DQUFHZixXQUFXN0MsaUVBQWE7OENBQUcwRCxRQUFROUIsSUFBSTs7Ozs7OzhDQUMzQyw4REFBQzNCLGtEQUFLQTtvQ0FDTjZELE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUtOLFFBQVFPLE1BQU07Ozs7Ozs4Q0FDbkIsOERBQUNMOzt3Q0FBR0YsUUFBUTFCLEtBQUs7d0NBQUM7Ozs7Ozs7OENBQ2xCLDhEQUFDNEI7b0NBQUVmLFdBQVc3QywrREFBVzs4Q0FBRzBELFFBQVFTLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUUsTUFBSzs7Ozs7OzhDQUMzRCw4REFBQzdELGlEQUFJQTtvQ0FBQzhELE1BQU0sY0FBY1gsUUFBUVksRUFBRTs4Q0FDbEMsNEVBQUNoQjtrREFBTzs7Ozs7Ozs7Ozs7OzJCQVRzQkksUUFBUVksRUFBRTs7Ozs7a0NBYzdDLDhEQUFDcEUsK0NBQU1BOzs7Ozs7Ozs7Ozs7O0FBSWI7R0E5R3dCTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi5qcz9mZmU0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29tcHMubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgRm9vdGVyICBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBFcnJvckZldGNoIGZyb20gXCIuL0Vycm9yRmV0Y2hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgIGxpc3RhRGVDaGFtcHMgZnJvbSBcIi4uL2FwaS9yb3V0ZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCl7XHJcblxyXG4gIGNvbnN0IFtjaGFtcHMsIHNldENoYW1wc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvZG9zQ2FtcCwgc2V0VGRzQ2FtcF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RleHRCdXNjYSwgc2V0VGV4dEJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCAoKT0+IHtcclxuXHJcbiAgICBjb25zdCBnZXRDaGFtcCA9IGFzeW5jICgpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi9hcGkvcm91dGVcIilcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0Q2hhbXBzKGRhdGEpO1xyXG4gICAgICBzZXRUZHNDYW1wKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2h7XHJcbiAgICAgIHNldElzRSh0cnVlKVxyXG4gICAgfX1cclxuXHJcbiAgICBnZXRDaGFtcCgpO1xyXG4gICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmNoYW1wc10uc29ydCgoYSxiKSA9PiBhLm5vbWUubG9jYWxlQ29tcGFyZShiLm5vbWUpKTtcclxuICAgIHNldENoYW1wcyhsaXN0QXV4KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyWmEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmNoYW1wc10uc29ydCgoYSxiKSA9PiBiLm5vbWUubG9jYWxlQ29tcGFyZShhLm5vbWUpKTtcclxuICAgIHNldENoYW1wcyhsaXN0QXV4KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUHJpY2VIID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEF1eCA9IFsuLi5jaGFtcHNdLnNvcnQoKGEsYikgPT4gKGEucHJlY28pIC0gKGIucHJlY28pKTtcclxuICAgIHNldENoYW1wcyhsaXN0QXV4KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUHJpY2VMID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEF1eCA9IFsuLi5jaGFtcHNdLnNvcnQoKGEsYikgPT4gKGIucHJlY28pIC0gKGEucHJlY28pKTtcclxuICAgIHNldENoYW1wcyhsaXN0QXV4KVxyXG4gIH07XHJcbiAgXHJcbiAgIGNvbnN0IGJ1c2NhID0gKHRleHQpID0+IHtcclxuICAgIHNldFRleHRCKHRleHQpO1xyXG5cclxuICAgIGlmKHRleHQudHJpbSgpID09IFwiXCIpe1xyXG4gICAgICAgIHNldENoYW1wcyh0b2Rvc0NhbXApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0xpc3QgPSBjaGFtcHMuZmlsdGVyKChwcm9kKSA9PiBcclxuICAgICAgcHJvZC5ub21lLnRvVXBwZXJDYXNlKCkudHJpbSgpLmluY2x1ZGVzKHRleHRCdXNjYS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgKTtcclxuICAgIHNldENoYW1wcyhuZXdMaXN0KTtcclxuXHJcbiAgIH1cclxuXHJcbiAgIGlmKGlzRXJyb3IgPT0gdHJ1ZSl7XHJcbiAgICAgICByZXR1cm4gPEVycm9yRmV0Y2gvPlxyXG4gICB9XHJcblxyXG4gIC8vIGlmICh0b2Rvc0NhbXBbMF0gPT0gbnVsbCl7XHJcbiAgLy8gICByZXR1cm4gPFNwaW5uZXIvPlxyXG4gIC8vIH1cclxuICBjb25zb2xlLmxvZyhjaGFtcHMpXHJcbiAgICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuZmlsdGVyc30+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0ZXh0QnVzY2F9IHBsYWNlaG9sZGVyPVwiUGVzcXVpc2UgdW0gcHJvZHV0b1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBidXNjYShldmVudC50YXJnZXQudmFsdWUpfS8+XHJcblxyXG4gICAgICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyQXogfT4gQXogPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyWmEgfT4gWmEgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgb3JkZXJQcmljZUggfT4gUHJlw6dvIE1haW9yLU1lbm9yIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyUHJpY2VMIH0+IFByZcOnbyBNZW5vci1NYWlvciA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgXHJcbiAgICAgIHtjaGFtcHMubWFwKChjYW1wZWFvKT0+IFxyXG4gICAgICBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtjYW1wZWFvLmlkfT5cclxuICAgICAgICAgPHAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdHVsb30+e2NhbXBlYW8ubm9tZX08L3A+XHJcbiAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgd2lkdGg9ezMwMH0gXHJcbiAgICAgICAgIGhlaWdodD17MzAwfSBcclxuICAgICAgICAgc3JjPXtjYW1wZWFvLmltYWdlbX0vPlxyXG4gICAgICAgICA8cD57Y2FtcGVhby5wcmVjb30gQ2lzY29zIEF6dWlzPC9wPlxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT57Y2FtcGVhby5kZXNjcmljYW8uc2xpY2UoMCwxNSkrIFwiLi4uXCJ9PC9wPlxyXG4gICAgICAgICA8TGluayBocmVmPXtcIi9jYW1wZWFvL1wiICsgY2FtcGVhby5pZH0+XHJcbiAgICAgICAgICAgPGJ1dHRvbj5WZXIgTWFpczwvYnV0dG9uPlxyXG4gICAgICAgICA8L0xpbms+XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICl9XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gIDwvbWFpbj5cclxuICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsIkZvb3RlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3Bpbm5lciIsIkVycm9yRmV0Y2giLCJMaW5rIiwibGlzdGFEZUNoYW1wcyIsIk1haW4iLCJjaGFtcHMiLCJzZXRDaGFtcHMiLCJ0b2Rvc0NhbXAiLCJzZXRUZHNDYW1wIiwidGV4dEJ1c2NhIiwic2V0VGV4dEIiLCJpc0Vycm9yIiwic2V0SXNFIiwiZ2V0Q2hhbXAiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvcmRlckF6IiwibGlzdEF1eCIsInNvcnQiLCJhIiwiYiIsIm5vbWUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJaYSIsIm9yZGVyUHJpY2VIIiwicHJlY28iLCJvcmRlclByaWNlTCIsImJ1c2NhIiwidGV4dCIsInRyaW0iLCJuZXdMaXN0IiwiZmlsdGVyIiwicHJvZCIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsdGVycyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIm1haW4iLCJtYXAiLCJjYW1wZWFvIiwiY2FyZCIsInAiLCJ0aXR1bG8iLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlbSIsImRlc2MiLCJkZXNjcmljYW8iLCJzbGljZSIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Main.js\n"));

/***/ })

});
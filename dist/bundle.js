/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgb(238, 215, 180);\\n}\\n\\n#interaction > div > div > div {\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-TODO-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://javascript-TODO-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-TODO-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"editProjects\": () => (/* binding */ editProjects),\n/* harmony export */   \"showProjectItems\": () => (/* binding */ showProjectItems)\n/* harmony export */ });\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_model__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-model */ \"./src/task-model.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n\n\n\n\n\nconst validateProjectName = (nameInput) => {\n  const checkValue = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.includes(nameInput.value);\n  if (checkValue) {\n    nameInput.style.color = 'red';\n    nameInput.value = `${nameInput.value} exists, choose another project name `;\n    return true;\n  }\n  return false;\n};\n\n// Finds specific project to work with when inserting todo lists\nconst findProject = title => _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(p => p.name === title);\n\nconst addTaskToProject = (t, index) => {\n  _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[index].taskList[t.id] = t; // With task.id as property of task object\n};\n\n// captures form, input, textarea, deadline, priority and creates task element\nconst editTasks = (f, i, t, d, p, pName, id) => {\n  const indexOfWorkingProject = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(findProject(pName));\n  let selectedValue;\n\n  p.forEach(item => {\n    if (item.checked) {\n      selectedValue = item.value;\n    }\n  });\n\n  if (!id) {\n    const task = new _task_model__WEBPACK_IMPORTED_MODULE_1__.default(\n      i.value,\n      t.value,\n      d.value,\n      selectedValue,\n      false,\n    );\n    addTaskToProject(task, indexOfWorkingProject);\n  } else {\n    const project = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.name === pName);\n    const projectIndex = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project);\n    const taskItem = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[projectIndex].taskList[id];\n    taskItem.name = i.value;\n    taskItem.description = t.value;\n    taskItem.date = d.value;\n    taskItem.priority = selectedValue;\n  }\n\n  // finds out what Project has this project name\n\n  f.reset();\n  i.focus();\n\n  // Sends task to renderer\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(indexOfWorkingProject);\n};\n\n// Captures task form values and push it as obj into prop taskList of specific myProjects item\nconst captureNewTask = (projectName) => {\n  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.newTodoForm)();\n\n  const h5 = document.querySelector('h5');\n  const form = document.getElementById('todo-form');\n  const input = document.getElementById('input');\n  const textarea = document.querySelector('textarea');\n  const deadline = document.querySelector('input[type=date]');\n  const priority = document.querySelectorAll('input[type=radio]');\n  const doneBtn = document.getElementById('done-btn');\n\n  // captures data from form then push them into task object inside project\n\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    editTasks(form, input, textarea, deadline, priority, projectName);\n  });\n\n  const clearTaskForm = () => {\n    form.style.display = 'none';\n    h5.classList.add('d-none');\n  };\n\n  doneBtn.addEventListener('click', e => {\n    e.preventDefault();\n    clearTaskForm();\n  });\n};\n\nconst addProject = p => {\n  const project = new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project(p); // Creates project with name specified in form\n  _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(project);\n\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoContainer)(p);\n  captureNewTask(p);\n};\n\n// *****First menu option*****\nconst createNewProject = () => {\n  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)(); // puts the form inside box\n  const saveButton = document.querySelector('button');\n\n  saveButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    const nameInput = document.querySelector('input.form-control');\n\n    if (!validateProjectName(nameInput)) {\n      const projectName = nameInput.value;\n      addProject(projectName);\n    }\n  });\n};\n\n// *****Second menu option*****\nconst editProjects = (pName) => {\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoContainer)(pName);\n  captureNewTask(pName);\n};\n\n// *****Third menu option*****\nconst showProjectItems = () => {\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderProjectsContainer)();\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderProjectItems)();\n  const projects = document.querySelectorAll('.alert');\n  projects.forEach(item => {\n    item.addEventListener('click', (e) => {\n      e.stopPropagation();\n      editProjects(e.target.textContent);\n    });\n  });\n};\n\nconst updateTask = (tName, pName, i, id) => {\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.innerHTML = '';\n  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.newTodoForm)('edit');\n  document.querySelectorAll('h5')[0].innerText = `Edit task '${tName}' of ${pName}'s  project.`;\n  const form = document.getElementById('todo-form');\n  const input = document.getElementById('input');\n  const textarea = document.querySelector('textarea');\n  const deadline = document.querySelector('input[type=date]');\n  const priority = document.querySelectorAll('input[type=radio]');\n\n  input.value = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].taskList[id].name;\n  input.style.color = 'red';\n  textarea.value = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].taskList[id].description;\n  deadline.value = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].taskList[id].date;\n\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    editTasks(form, input, textarea, deadline, priority, pName, id);\n  });\n};\n\n// buttons delete and status of each task item\nconst taskActions = (e) => {\n  const currentTaskPrj = document.getElementsByTagName('a')[0].id; // Gets name of current prj\n  const prjIndex = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(findProject(currentTaskPrj));\n  const taskItem = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[prjIndex].taskList[e.target.id];\n\n  if (e.target.classList.contains('fa-check-circle')) {\n    taskItem.status = true;\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(prjIndex);\n  } else if (e.target.classList.contains('fa-minus-circle')) {\n    delete _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[prjIndex].taskList[e.target.id];\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(prjIndex);\n  } else if (e.target.classList.contains('fa-undo-alt')) {\n    taskItem.status = false;\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(prjIndex);\n  } else if (e.target.classList.contains('fa-edit')) {\n    updateTask(taskItem.name, currentTaskPrj, prjIndex, e.target.id);\n  }\n  e.stopPropagation();\n};\n\n_views__WEBPACK_IMPORTED_MODULE_3__.taskListDiv.addEventListener('click', (e) => {\n  taskActions(e);\n});\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/controller.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectForm\": () => (/* binding */ newProjectForm),\n/* harmony export */   \"newTodoForm\": () => (/* binding */ newTodoForm),\n/* harmony export */   \"box\": () => (/* binding */ box)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst box = document.getElementById('box');\n\nconst renderForms = (title, form, btn = false) => {\n  box.append(title, form);\n  if (btn) { // adds a button to open form again\n    const addMoreTasksBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-success btn-lg ml3 col-6');\n    addMoreTasksBtn.classList.add('d-none'); // when form is hidden, and want to add more tasks again\n    addMoreTasksBtn.textContent = 'Add more tasks';\n    box.append(addMoreTasksBtn);\n  }\n};\n\nconst newProjectForm = () => {\n  box.innerHTML = '';\n  const projectFormTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', 'New Project');\n  const projectForm = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('form', 'class', 'justify-content-start align-items-start');\n  projectForm.classList.add('p-2', 'border');\n  const projectFormGroup = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex align-items-center');\n  const projectFormLabel = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Name:');\n  const projectFormInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control');\n  const projectSubmitBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-primary btn-lg mb-1 px-5');\n  projectSubmitBtn.textContent = 'Save';\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(projectFormInput, {\n    type: 'text', placeholder: 'Name of this project', required: '', autofocus: '',\n  });\n  projectSubmitBtn.setAttribute('type', 'submit');\n\n  projectFormGroup.append(projectFormLabel, projectFormInput);\n  projectForm.append(projectFormGroup, projectSubmitBtn);\n\n  renderForms(projectFormTitle, projectForm);\n};\n\nconst newTodoForm = (kind) => {\n  const taskFormTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h5', 'class', 'py-2 text-danger', 'New Task');\n  const taskForm = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('form', 'class', 'pb-4 border p-2');\n  taskForm.id = 'todo-form';\n  const taskFormGroup1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex');\n  const taskFormLabel1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Name:');\n  const taskFormInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control justify-content-center');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(taskFormInput, {\n    type: 'text', placeholder: 'Name of task', required: '', autofocus: '', id: 'input',\n  });\n  const taskFormGroup2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex');\n  const taskFormLabel2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Description:');\n  const textArea = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('textarea', 'class', 'form-control');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(textArea, { placeholder: 'Description here', required: '' });\n  const taskFormGroup3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex align-items-center');//\n  const taskFormLabel3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'col-4 mb-0', 'Due Date:');\n  const dateInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control');\n  dateInput.setAttribute('type', 'date');\n  const taskFormGroup4 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex justify-content-around');\n  const taskFormLabel4 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'nul', 'Priority:');\n  const radio1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('High');\n  const radio2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('Normal');\n  const radio3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('Low');\n  const defaultRadio = radio2.firstChild.nextSibling;\n  defaultRadio.setAttribute('checked', 'checked');\n  const submitBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-primary btn-lg col-6 mx-2');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.textContent = !kind ? 'Add it!' : 'Update task';\n  const doneBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('a', 'class', 'btn btn-info btn-lg ml3 col-4 mx-2'); // hides form\n  doneBtn.id = 'done-btn';\n  doneBtn.textContent = 'Done';\n\n  taskFormGroup1.append(taskFormLabel1, taskFormInput);\n  taskFormGroup2.append(taskFormLabel2, textArea);\n  taskFormGroup3.append(taskFormLabel3, dateInput);\n  taskFormGroup4.append(taskFormLabel4, radio1, radio2, radio3);\n  taskForm.append(taskFormGroup1, taskFormGroup2, taskFormGroup3,\n    taskFormGroup4, submitBtn);\n  if (!kind) taskForm.appendChild(doneBtn);\n\n  renderForms(taskFormTitle, taskForm, true);\n};\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/forms.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDomElem\": () => (/* binding */ addDomElem),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes),\n/* harmony export */   \"createRadios\": () => (/* binding */ createRadios)\n/* harmony export */ });\nconst addDomElem = (tag, att, name, content) => {\n  const domElem = document.createElement(tag);\n  if (content) domElem.textContent = content;\n  if (att === 'id') {\n    domElem.id = name;\n  } else if (att === 'class') {\n    name.split(' ').forEach(n => {\n      domElem.classList.add(n);\n    });\n  }\n\n  return domElem;\n};\n\nconst setAttributes = (el, attrs) => {\n  Object.entries(attrs).forEach(([key, value]) => {\n    el.setAttribute(key, value);\n  });\n};\n\nconst createRadios = (val) => {\n  const div = addDomElem('div', 'class', 'form-check', val);\n  div.classList.add('d-flex');\n  const input = addDomElem('input', 'class', 'form-check-input');\n  setAttributes(input, { type: 'radio', name: 'choice', value: val });\n  div.appendChild(input);\n  return div;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_model__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlocalStorage.setItem('projects', JSON.stringify(_project_model__WEBPACK_IMPORTED_MODULE_2__.myProjects));\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (localStorage.getItem('projects')) {\n    _project_model__WEBPACK_IMPORTED_MODULE_2__.myProjects = JSON.parse(localStorage.getItem('projects'));\n  }\n});\n\nconst menu = document.getElementById('menu');\n\nconst selectActions = e => {\n  const menuChoice = e.target.id;\n\n  switch (menuChoice) {\n    case 'new':\n      (0,_controller__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();\n      break;\n    case 'default':\n      (0,_controller__WEBPACK_IMPORTED_MODULE_1__.editProjects)('Default');\n      break;\n    case 'projects':\n      (0,_controller__WEBPACK_IMPORTED_MODULE_1__.showProjectItems)();\n      break;\n    default:\n      break;\n  }\n};\n\nmenu.addEventListener('click', e => {\n  e.preventDefault();\n  selectActions(e);\n});\n\n//# sourceURL=webpack://javascript-TODO-app/./src/index.js?");

/***/ }),

/***/ "./src/project-model.js":
/*!******************************!*\
  !*** ./src/project-model.js ***!
  \******************************/
/***/ ((module) => {

eval("function Project(name, taskList = []) {\n  this.name = name;\n  this.taskList = taskList;\n}\n\nconst defaultPrj = new Project('Default');\n\nconst myProjects = []; // an array which will contain a list of projects\n\nmyProjects.push(defaultPrj);\n\nmodule.exports = Project;\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/project-model.js?");

/***/ }),

/***/ "./src/task-model.js":
/*!***************************!*\
  !*** ./src/task-model.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction Task(name, description, date, priority, status = false) {\n  this.id = Date.now();\n  this.name = name;\n  this.description = description;\n  this.date = date;\n  this.priority = priority;\n  this.status = status;\n}\nmodule.exports = Task;\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/task-model.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectsContainer\": () => (/* binding */ renderProjectsContainer),\n/* harmony export */   \"renderProjectItems\": () => (/* binding */ renderProjectItems),\n/* harmony export */   \"renderTodoContainer\": () => (/* binding */ renderTodoContainer),\n/* harmony export */   \"renderTodoItems\": () => (/* binding */ renderTodoItems),\n/* harmony export */   \"taskListDiv\": () => (/* binding */ taskListDiv)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_model__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\n\nconst taskListDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'mt-3');\nconst projectsListDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'mt-3'); // Inside this the boxes with every project\n\n// Render each project *third menu button*\nconst renderProjectItems = () => {\n  const template = document.getElementById('template-project').content;\n  const fragment = document.createDocumentFragment();\n\n  projectsListDiv.innerHTML = '';\n  _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects.forEach(item => {\n    const clone = template.cloneNode(true);\n    clone.querySelector('p').textContent = item.name;\n    fragment.appendChild(clone);\n  });\n\n  return projectsListDiv.appendChild(fragment);\n};\n\n// renders the projects container\nconst renderProjectsContainer = () => {\n  const projectTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', 'Projects');\n  const projectPara = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-center');\n  projectPara.textContent = 'Select a project and start adding your Todo tasks:\\n';\n\n\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.innerHTML = '';\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.append(projectTitle, projectPara, projectsListDiv);\n};\n\n// Renders every task item inside projectsListDiv\nconst renderTodoItems = (index) => {\n  const template = document.getElementById('template-task').content;\n  const fragment = document.createDocumentFragment();\n\n  // If there are not tasks to display, puts a message\n  if (!Object.values(_project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects[index].taskList).length) {\n    taskListDiv.innerHTML = `\n    <div class=\"alert alert-dark\">There are not tasks yet. Let's create a new one.</div>\n    `;\n    return;\n  }\n\n  taskListDiv.innerHTML = '';\n\n  Object.values(_project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects[index].taskList).forEach(task => {\n    const clone = template.cloneNode(true);\n    if (task.status) {\n      clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary');\n      clone.querySelector('.fa-check-circle ').classList.replace('fa-check-circle', 'fa-undo-alt');\n      clone.querySelector('p').style.textDecoration = 'line-through';\n    } else {\n      clone.querySelector('.alert').classList.replace('alert-primary', 'alert-danger');\n    }\n\n    if (task.priority === 'High') {\n      clone.querySelector('.fa-battery-half').classList.replace('fa-battery-half', 'fa-battery-full');\n    } else if (task.priority === 'Low') {\n      clone.querySelector('.fa-battery-half').classList.replace('fa-battery-half', 'fa-battery-empty');\n    }\n\n    clone.querySelector('p').textContent = task.name;\n    clone.querySelectorAll('span')[1].textContent = task.description;\n    clone.getElementById('date').textContent = task.date;\n    clone.querySelector('.fas').id = task.id;\n    clone.querySelectorAll('.fas')[1].id = task.id;\n    clone.querySelectorAll('.fas')[2].id = task.id;\n\n    fragment.appendChild(clone);\n  });\n  taskListDiv.appendChild(fragment);\n};\n\n// renders the div containing of each task to do\nconst renderTodoContainer = (pName) => {\n  // bring project name here\n  const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', `Todo List - ${pName} project`);\n  const taskIdentifier = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('a', 'id', `${pName}`, ''); // For grabbing task\n\n  const project = _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects.find(project => project.name === pName);\n  const projectIndex = _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects.indexOf(project);\n  renderTodoItems(projectIndex);\n\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.innerHTML = '';\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.append(title, taskIdentifier, taskListDiv);\n};\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/views.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
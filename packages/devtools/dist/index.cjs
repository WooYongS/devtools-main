"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  addCustomCommand: () => import_devtools_kit.addCustomCommand,
  addCustomTab: () => import_devtools_kit.addCustomTab,
  devtools: () => devtools,
  onDevToolsClientConnected: () => import_devtools_kit.onDevToolsClientConnected,
  onDevToolsConnected: () => import_devtools_kit.onDevToolsConnected,
  removeCustomCommand: () => import_devtools_kit.removeCustomCommand
});
module.exports = __toCommonJS(index_exports);
var import_devtools_electron = require("@vue/devtools-electron");
var import_devtools_kit = require("@vue/devtools-kit");
var devtools = {
  ...import_devtools_kit.devtools,
  connect: import_devtools_electron.connect
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addCustomCommand,
  addCustomTab,
  devtools,
  onDevToolsClientConnected,
  onDevToolsConnected,
  removeCustomCommand
});

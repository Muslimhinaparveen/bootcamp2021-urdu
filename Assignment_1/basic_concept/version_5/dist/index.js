"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
console.clear();
let col1 = new itemCollection_1.ItemCollection();
col1.addTodo("Purchase kurti of j.");
col1.addTodo("Purchase kurti of ideas.");
col1.addTodo("Purchase kurti of Gul Ahmed.");
col1.taskDone(3);
col1.printDetails();

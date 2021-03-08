const assertEqual = require("../assertEqual");
const head = require("../head");


assertEqual(head([1,2,3]), 1);
assertEqual(head([1,2,3]), 2);
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);



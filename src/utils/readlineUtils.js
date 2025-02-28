"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rl = void 0;
exports.askQuestion = askQuestion;
var readline = require("readline");
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(question) {
    return new Promise(function (resolve) {
        exports.rl.question(question, function (answer) { return resolve(answer); });
    });
}

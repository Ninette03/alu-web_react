"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Director = void 0;
exports.createEmployee = createEmployee;
exports.isDirector = isDirector;
exports.executeWork = executeWork;
exports.teachClass = teachClass;
exports.Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
exports.Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (salary < 500) {
        return new exports.Teacher();
    }
    return new exports.Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee(500));
function isDirector(employee) {
    return employee instanceof exports.Director;
}
function executeWork(employee) {
    if (employee instanceof exports.Director) {
        return employee.workDirectorTasks();
    }
    if (employee instanceof exports.Teacher) {
        return employee.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));

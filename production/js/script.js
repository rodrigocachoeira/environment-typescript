var Student = (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.talkMyName = function () {
        console.log(this.name);
    };
    return Student;
}());
var student = new Student('Rodrigo', 19);
student.talkMyName();
//# sourceMappingURL=script.js.map
class Student
{
  name: string;
  age: number;

  /**
  * Construct Method
  *
  * @param String name
  * @param int age
  */
  constructor(name: string, age: number)
  {
    this.name = name;
    this.age = age;
  }

  /**
  * Print Something in browser
  *
  * @return void
  */
  talkMyName(): void
  {
    console.log(this.name);
  }
}


//tests
var student = new Student('Rodrigo', 19);
student.talkMyName();

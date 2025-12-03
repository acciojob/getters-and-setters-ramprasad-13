class Person {
  constructor(name, age) {
    // We use underscores (_) to store the actual data
    // to avoid infinite loops with getters/setters
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }
  
  // Setter for name (Added per "Notes" requirement)
  set name(name) {
    this._name = name;
  }

  // Getter for age (Added so we can read the age)
  get age() {
    return this._age;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  // No constructor needed; it automatically inherits (name, age) from Person
  
  study() {
    // 1. Use console.log as requested
    // 2. Use 'this.name' (no brackets) because it's a getter
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // No constructor needed here either

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
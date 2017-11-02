var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(x, y) {
    if (x.name < y.name) {
      return -1;
    } else if (x.name === y.name) {
        if (x.age < y.age){
          return 1;
        }
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
});
console.log(students);
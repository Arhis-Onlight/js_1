function User(firstName, lastName) {
    // вспомогательная переменная
    var phrase = "Привет";
  
    //  вспомогательная вложенная функция
    function getFullName() {
        return firstName + " " + lastName;
      }
  
    this.sayHi = function() {
      console.log( phrase + ", " + getFullName() ); // использование
    };
  }
  
  var vasya = new User("Вася", "Петров");
  vasya.sayHi(); // Привет, Вася Петров
  console.log(vasya.phrase);
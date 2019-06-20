document.getElementById('date').innerHTML = new Date().toDateString();

// object.onclick = function(){myScript};

// object.addEventListener("click", myScript);

document.getElementById("demo").onclick = function() {
    myFunction()};

function myFunction() {
    // Popup window with a message
    window.alert(5 + 6); 
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

function myFunction2() {
    // Popup window with a message
    document.getElementById("demo").innerHTML = "YJKBDJFHKSDJHFBKJH!";
}


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
const square = new Rectangle(10, 10);
  
console.log(square.area); // 100


function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";

    myFunction2()
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="";
  }
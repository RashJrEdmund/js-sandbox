const Cars = function(nom, pistons, max_gear, brand) {
  this.name = nom;
  this.pistons = pistons;
  this.max_gear = max_gear;
  this.brand = brand
}

class Locomotive {
  
}

const myFirstCar = new Cars('Ford Mustang', 8, 6, 'Ford');
const mySecondCar = new Cars('Mucieliago', 8, 6, 'Lamborghini');

Cars.prototype.wheels = 4;

console.log(myFirstCar);
console.log(mySecondCar);

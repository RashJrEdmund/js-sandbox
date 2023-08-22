const Cars = function(nom, pistons, max_gear, brand) {
  this.name = nom;
  this.pistons = pistons;
  this.max_gear = max_gear;
  this.brand = brand
}

class Locomotive {
  customSort(arr) {
    return arr.sort((a, z) => a - z);
  }
}

const custom = new Locomotive();
custom.customSort([2, 3, 1, 3, 4]);

const myFirstCar = new Cars('Ford Mustang', 8, 6, 'Ford');
const mySecondCar = new Cars('Mucieliago', 8, 6, 'Lamborghini');

Cars.prototype.wheels = 4;

// console.log(myFirstCar);
// console.log(mySecondCar);

module.exports = Locomotive

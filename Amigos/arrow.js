const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
  };
  
  const powers = [1,2,3,4,5].map((number, index) =>  Math.pow(number, index));
  
  
  const add = (n1, n2) => n1 + n2;

  const milesToKm = miles => miles * 1.60934;
  
  // console.log(hello());
  // console.log(powers);
  // console.log(add(100,100));
  // console.log(milesToKm(100));

//****************** Lexical this

  // One way
  const person1 = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    toString: function() {
      // console.log(`${this.name} has ${this.cars}`)
      // prints this -> Alex has ferrari,lambo
      const that = this;
      this.cars.forEach(function(car) {
        // console.log(`${that.name} has ${car}`);
    })
  }
  }

  person1.toString();

  // Another way
  const person2 = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    toString: function() {
      // console.log(`${this.name} has ${this.cars}`)
      // prints this -> Alex has ferrari,lambo
      this.cars.forEach(function(car) {
        // console.log(`${this.name} has ${car}`);
    }.bind(this))
  }
  }

  person2.toString();

  // Also another way
  const person3 = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    toString: function() {
      // console.log(`${this.name} has ${this.cars}`)
      // prints this -> Alex has ferrari,lambo
      this.cars.forEach((car) => {
        // console.log(`${this.name} has ${car}`);
    })
  }
  }

  person3.toString();


  // *************** Enhanced Object Properties 

  const pricePropName = "PRICE";

  const calculator = (name, price) => {
    return {
      name,
      add(n1, n2) {
        return n1 + n2;
      },
      [pricePropName.toLowerCase()]: price
    }
  }

  const calc = calculator('casio', 19.99)

  // console.log(calc.name);
  // console.log(calc.add(20, 20))
  // console.log(calc.price)

  // ******************* Array Destructuring
  const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

  const [anna, , joe, ...restOfNames] = names;

  console.log(`${anna} ${joe}`);
  console.log(restOfNames.length);
  console.log(restOfNames)


  // ************Object Destructuring
  const getUser = () => {
    return {
      name: 'John',
      surname: 'Doe',
      gender: 'male',
      address: {
        country: 'United States',
        city: 'California',
        postCode: 'CA',
        fullAddress: {
          doorNumber: 22,
          street: 'LA st'
        }
      },
      age: 29
    }
  };
  
  const user = getUser();
  
  // const name = user.name;
  // const age = user.age;
  // const country = user.address.country;
  // const doorNumber = user.address.fullAddress.doorNumber;

  const { name, age, address : { country : theCountry} } = user;
  const { address : { fullAddress : { doorNumber : number}}} = user
  
  console.log(name);
  console.log(age);
  console.log(theCountry);
  console.log(number);
  
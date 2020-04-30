function sample() {
  const map = new Map();
  map.set("key", "A key");

  console.log(map);
  for (let key of map.keys()) {
    console.log(key);
  }

  for (let value of map.values()) {
    console.log(value);
  }

  this.a = "A value";
  console.log("This", this);

  const arrowFunction = () => {
    this.b = "B Value " + this.a;
    console.log("This", this);
  };

  arrowFunction();
}

const stringToNumber = (input) =>
  [...input].map((value) => +value).reduce((acc, value) => acc + value, 0);

sample();
console.log(stringToNumber("12345"));

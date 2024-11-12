class Animal {
  constructor(name, species, breed, price) {
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.price = price;
  }

  eat() {
    console.log(`${this.name}正在吃饭`);
  }

  sleep() {
    console.log(`${this.name}正在睡觉`);
  }

  play() {
    console.log(`${this.name}正在玩`);
  }
}
class Cat extends Animal {
  constructor(name, breed, price) {
    super(name, "猫", breed, price);
  }

  call() {
    if (this.play()) {
      console.log(`${this.name}正在叫`);
    }
  }
}
class Dog extends Animal {
  constructor(name, breed, price) {
    super(name, "狗", breed, price);
  }

  bark() {
    console.log(`${this.name}正在叫`);
  }
}
// 小猫
const cat1 = new Cat("小白", "波斯猫", 1000);
const cat2 = new Cat("小黑", "英国短毛猫", 800);

// 小狗
const dog1 = new Dog("小黄", "金毛犬", 1200);
const dog2 = new Dog("小红", "德国牧羊犬", 1500);
// 单例模式
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = "单例模式数据";
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
console.log(instance1.getData());



// 工厂模式
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} 发出声音`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} 汪汪叫`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} 喵喵叫`);
  }
}

class AnimalFactory {
  static createAnimal(type, name) {
    switch (type) {
      case "dog":
        return new Dog(name);
      case "cat":
        return new Cat(name);
      default:
        return new Animal(name);
    }
  }
}

const dog = AnimalFactory.createAnimal("dog", "Rex");
const cat = AnimalFactory.createAnimal("cat", "Whiskers");

dog.speak(); // Rex 汪汪叫
cat.speak(); // Whiskers 喵喵叫





// 命令模式
class Command {
  execute() {}
}

class Light {
  turnOn() {
    console.log("灯打开了");
  }

  turnOff() {
    console.log("灯关掉了");
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton(); // 灯打开了

remote.setCommand(lightOff);
remote.pressButton(); // 灯关掉了





// 装饰者模式
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 0.5;
  }
}

let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log(myCoffee.cost()); // 6.5

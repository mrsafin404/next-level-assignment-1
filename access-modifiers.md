# Access Modifiers in TypeScript OOP

Access modifiers in TypeScript allow us to control the visibility of the properties and methods of a class. TypeScript controls the access of these access modifiers in the compile time, not in run time.

There are 3 access modifiers in TypeScript:

1. Public,
2. Private,
3. Protected

## 1. Public Modifier

The public modifier allows properties and methods to access from anywhere (inside or outside the class) in the code. This is the default modifier for the properties and methods of a class. If we do not specify any access modifier for properties or methods, then they will take the public modifier by default.

For example:

```typescript
class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Safin', 21);

console.log(person1.name) // This will return the person1 objects name, here we can access the public modifier property outside the class
```

## 2. Private Modifier

The private modifier prevents us from accessing (reading or writing) the property or the method outside of its class.

For example:

```typescript
class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge: number) {
        this.age = newAge;
    }
}

const person1 = new Person('Safin', 21)

person1.updateAge(18) // Updates the age to 18

console.log(person1.age) // Compile error, can't access private property age outside the class
```

Here we can modify it using the `updateAge` method which is the method of its class. But we can’t access the private `age` property outside the class using `person1.age`

## 3. Protected Modifier

Protected modifier allows the properties and methods to be accessed within its class and subclasses only. We can’t access it outside of its class or subclasses.

For example:

```typescript
class Person {
  protected name: string;

  constructor(age: string) {
    this.name = age;
  }
}

class User extends Person {
  public getUserName(): string {
    return this.name + "@111";
  }
}

const user = new User("Safin");

console.log(user.getUserName()); // Output: "Safin@111"

console.log(user.name); // Compile Error, can't access protected name property outside of its class or subclasses
```

Here we can only access the protected `name` property within its class and subclasses, not in other places.

## 4. Readonly

We have a special keyword `readonly`, it controls the writability of a property. We can only assign an initial value to a `readonly` property and can’t change or reassign it later.

```typescript
class Person {
  public readonly name: string;

  constructor(age: string) {
    this.name = age;
  }

  updateName(newName: string) {
    this.name = newName; // Can't change the value because it's a readonly property
  }
}
```

We can also combine `readonly` with the access modifiers.
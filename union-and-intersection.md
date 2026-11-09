# Union and Intersection Types in TypeScript

We use union (`|`) and intersection (`&`) to combine multiple data types in TypeScript. Let’s see how we can use these with practical examples.

## 1. Union Type

We can use union type when a value can be more than one type. We define a union type using a pipe (`|`) symbol.

Suppose we have a variable `id` which can be a `number` or a `string`. Then we can define the type of this variable using the union type.

```typescript
let id: number | string;

id = 123; // valid
id = "ab12"; // valid
```

## 2. Intersection Type

Intersection type is used to merge multiple types into one. A value of this type must contain all the properties of the merged types. We use (`&`) symbol to define an intersection type.

For example:

```typescript
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person1: Person = {
    name: "Safin",
    age: 21
};
```

Here in this example, the type `Person` is an intersection type which combines the `Name` and `Age` type. So, a value of type `Person` must contain both `name` and `age` properties.
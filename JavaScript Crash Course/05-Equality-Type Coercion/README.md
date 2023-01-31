# Equality and Type Coercion

## Loose Equality

The most basic equaltiy operator in JavaScript using `==`. Loose equality compares values regardless of types following these steps :

- If both values are either `null` or `undefined` return true.
- Convert all `booleans` to `numbers`. `True` converts to `1` and `false` converts to 0.
- If comparing a `number` to a `string`, convert the `string` to a `number`
- If comparing an `object` to a `string`, convert the `object` using its `toString()` or `valueOf()` methods.
- If the types are the same, follow the same rules as **strict equality**

## Strict Equality

A JavaScript equality operator using `===`. Strict equality compares both values and types following these steps:

- If either value is `NaN`return false.
- If the values have different types, return false.
- If both values are `null` or both values are `undefined`, return true.
- If both values are `objects` , return true if they are the same object. False otherwise.
- If both values are the same primitive type, return true if the values are the same. False otherwise.

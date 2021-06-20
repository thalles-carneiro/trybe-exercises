const newKey = (object, key, value) => {
  object[key] = value;
  return object;
}
console.log(newKey({name: 'Thalles', lastName: 'Carneiro'}, 'age', 27));
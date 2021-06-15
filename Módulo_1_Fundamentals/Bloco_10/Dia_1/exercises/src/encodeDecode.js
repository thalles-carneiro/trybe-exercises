function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = splitString
    .map((character) => (objectMap[character] ? objectMap[character] : character));
  return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

module.exports = {
  encode,
  decode,
};
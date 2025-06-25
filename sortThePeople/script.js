/* 
    Input: 
        names = ["Mary","John","Emma"], 
        heights = [180,165,170]
    
    Output: ["Mary","Emma","John"]
*/
var sortPeople = function (names, heights) {
  const quickSort = (persons = []) => {
    if (persons.length < 2) {
      return persons;
    }

    const smaller = [];
    const bigger = [];

    const pivotPerson = persons[0];
    const pivotHeightPerson = pivotPerson.height;

    for (const person of persons.slice(1)) {
      if (person.height <= pivotHeightPerson) {
        smaller.push(person);
      } else {
        bigger.push(person);
      }
    }

    return [...quickSort(bigger), ...[pivotPerson], ...quickSort(smaller)];
  };

  const namesToHeightsMap = names.map((name, index) => ({
    name,
    height: heights[index],
  }));

  const sortedNames = quickSort(namesToHeightsMap);

  return sortedNames.map((item) => item.name);
};

const namesParam = ["Mary", "John", "Emma"];
const heightsParam = [180, 165, 170];

const resultSortPeople = sortPeople(namesParam, heightsParam);

console.log({ resultSortPeople });

function calculateHousePerimeter({ sideC, sideA, sideD, sideB }) {
  const perimeter = sideA + sideB + sideC + sideD;
  return perimeter;
}

const house = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
};

const perimeter = calculateHousePerimeter(house);

console.log(`Perimeter of the house: ${perimeter}`);

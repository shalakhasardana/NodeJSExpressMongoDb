const rect = require('./rectangle');

function solveRect(l, w) {
  console.log(`Solving for rectange with dimensions: ${l}, ${w} `);

  if (l <= 0 || w <= 0) {
    console.log(
      `Rectange dimensions must be grater than zero. Received : ${l} , ${w}`
    );
  } else {
    console.log(`Area of rectangle: ${rect.area(l, w)}`);
    console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
  }
}

solveRect(2, 4);
solveRect(3, 8);
solveRect(0, 4);
solveRect(2,-4);

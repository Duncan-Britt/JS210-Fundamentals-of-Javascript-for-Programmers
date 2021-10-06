function triangles(nRows) {
  let width = nRows;
  for (let nStars = 1; nStars <= nRows; nStars++) {
    console.log(' '.repeat(width - nStars) + '*'.repeat(nStars))
  }
}

triangles(9);

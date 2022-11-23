const wordSearch = (letters, word) => {
    // first we will search on the original letters nested array
    // we will search on the transpose(letters) array
    // const lettersT = transpose(letters)
    const superArr = [letters, transpose(letters)];
    for (let arr of superArr) {
        const horizontalJoin = arr.map(ls => ls.join(''))
        for (l of horizontalJoin) {
            if (l.includes(word)) return true
        }
    }
    return false;
}

const transpose = function (matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i ++) {
      for (let j = 0; j < matrix.length; j ++) {
        if (j === 0) {
           newMatrix.push([]);
        }
        newMatrix[i].push(matrix[j][i]);
      }
    }
    return newMatrix;
  }

module.exports = wordSearch



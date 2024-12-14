const character = "#";
const count = 8;
const rows = [];
let inverted = false;
//Quando 'inverted' for true, a pirâmide será gerada de cabeça para baixo. Em portugês|In portuguese
//When 'inverted' is true, the pyramid will be generated upside down. Em Inglês|In English

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
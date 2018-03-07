/**
 * Write a program in any language that prints the numbers from 1 to 100. But for multiples of
 * three print “Bizz” instead of the number and for the multiples of five print “
 * which are multiples of both three and five print “Appz
 * which are multiples of both three and five print “BizzAppz”
 */


const isMultiple = (multiple) => (no) => no % multiple === 0;
const isMultipleOfThree = isMultiple(3);
const isMultipleOfFive = isMultiple(5);

function printOutput(limit) {
  for (let no = 1; no <= limit; no++) {
    if (isMultipleOfThree(no) && isMultipleOfFive(no)) {
      console.log('BizzAppz');
    } else if (isMultipleOfThree(no)) {
      console.log('Bizz');
    } else if (isMultipleOfFive(no)) {
      console.log('Appz');
    } else {
      console.log(no)
    }
  }
}

printOutput(100);

import {EOL} from 'os';

const numberOnLcd = {
  '0': {0: ' _ ', 1: '| |', 2: '|_|'},
  '1': {0: '   ', 1: '  |', 2: '  |'},
  '2': {0: ' _ ', 1: ' _|', 2: '|_ '},
  '3': {0: ' _ ', 1: ' _|', 2: ' _|'},
  '4': {0: '   ', 1: '|_|', 2: '  |'},
  '5': {0: ' _ ', 1: '|_ ', 2: ' _|'},
  '6': {0: ' _ ', 1: '|_ ', 2: '|_|'},
  '7': {0: ' _ ', 1: '  |', 2: '  |'},
  '8': {0: ' _ ', 1: '|_|', 2: '|_|'},
  '9': {0: ' _ ', 1: '|_|', 2: '  |'}
}

export function transform(inputChars) {
  let result = EOL;
  for (let nbLine = 0; nbLine < 3; nbLine++) {
    result += buildOneLine(inputChars, nbLine);
    if (nbLine != 2) {
      result += EOL;
    }
  }
  return result;
}

function buildOneLine(inputChars, lineNumber) {
  let line = ""
  for (let charIndex = 0; charIndex < inputChars.length; charIndex++) {
    line += tranformOneChar(inputChars.charAt(charIndex), lineNumber);
    if (isNotLastCharOfLine(inputChars, charIndex)) {
      line += "   ";
    }
  }
  return line;
}

function tranformOneChar(inputChar, lineNumber) {
  if (numberOnLcd[inputChar]) {
    return numberOnLcd[inputChar][lineNumber];
  } else {
    return "   ";
  }
}

function isNotLastCharOfLine(inputChars, charIndex) {
  return charIndex != inputChars.length -1
}

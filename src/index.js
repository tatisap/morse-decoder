const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedExpr = '';

    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.substr(i, 10);
        decodedExpr += decodeLetter(letter); 
    }

    function decodeLetter(letter) {
        if (letter === '**********') return ' ';
        
        let morseCode = '';

        for (let i = 0; i < letter.length; i += 2) {
            let codeChar = letter.substr(i, 2);
            switch (codeChar) {
                case '10':
                    morseCode += '.';
                    break;
                case '11':
                    morseCode += '-';
                    break;
            }
        }

        return MORSE_TABLE[morseCode];
    }

    return decodedExpr;
}

module.exports = {
    decode
}
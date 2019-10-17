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

function array(code) {
  let first = 0;
  let last = 10;
  let arr = [];
  for (let i = 0; i < code.length; i++) {
    if (i%10 == 0) {
      arr.push(code.slice(first, last));
      first = first + 10;
      last = last + 10;
    } 
  }
  return arr;
}

function zero_slice(array) {
  let sliced_array =  [];
  let array_item;
  for (let index = 0; index < array.length; index++) {
    sliced_array.push(array[index].slice(array[index].indexOf("1")));
  }
  return sliced_array;
}

function morse_code(array) {
  let coded = [];
  let str = '';
  let coded_string = '';
  for (let index = 0; index < array.length; index++) {
    str = array[index];
    for (let i = 1; i < str.length;) {
      if (str[i] == 0) {
        coded_string = coded_string + '.';
      }else{
        coded_string = coded_string + '-';
      }
      i = i + 2;
      }
      coded.push(coded_string);  
      coded_string = '';  
    }
    return coded;
  }



function decode(expr) {
    // write your solution here
    
  let get_array = array(expr);
  let result_string = '';
  get_array = zero_slice(get_array);
  get_array = morse_code(get_array);
  for (let index = 0; index < get_array.length; index++) {
    if (get_array[index] == '') {
      result_string = result_string + ' ';
    } else {
      result_string = result_string + MORSE_TABLE[get_array[index]];
    }  
  }
  return result_string;
}

decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010")

module.exports = {
    decode
}
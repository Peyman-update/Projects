
////////////////////// String Method ////////////////////////

// charAt()	Returns the character at a specified index (position)

// charCodeAt()	Returns the Unicode of the character at a specified index

// charCodeAt() vs codePointAt()

// The concat() method joins two or more strings.

// endsWith()	Returns if a string ends with a specified value





let str = 'Returns the character at a specified index (position)';


const frist_charcter = str.charAt(12), frist_unicode = str.charCodeAt(12);

console.log(`frist_unicode : ${frist_unicode} and frist_character ${frist_charcter}`);


const last_charcter = str.charAt(str.length - 1), last_unicode = str.charCodeAt(str.length - 1);

console.log(`unicode : ${last_unicode} and lastCharacter : ${last_charcter}`);


let str1 = 'Returns the Unicode of the character at a specified index';


const character_unicode = str1.charAt(12), unicode = str1.charCodeAt(12), unicode_point = str1.codePointAt(12);

console.log(`unicode : ${unicode} and unicode_point : ${unicode_point} and character : ${character_unicode} `);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let concatStr = str.concat(str1);

let concatindex = str.concat(str1[str1.length - 1]);

console.log(`\nTwo String above are concat : ${concatStr}`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let endswith = 'Returns if a string ends with a specified value';

console.log(`\n is it endWith String value ? : ${endswith.endsWith('value')}`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












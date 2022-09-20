
////////////////////// String Method ////////////////////////

// fromCharCode()	Returns Unicode values as characters , The syntax is always String.fromCharCode().

// includes()	Returns if a string contains a specified value .

// repeat()	Returns a new string with a number of copies of a string , method does not change the original string.

// replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced ,method does not change the original string.

// search()	Searches a string for a value, or regular expression, and returns the index (position) of the match

// slice()	Extracts a part of a string and returns a new string , method does not change the original string.

// split()	Splits a string into an array of substrings  , method does not change the original string.

// startsWith()	Checks whether a string begins with specified characters , method does not change the original string.

// substr()	Extracts a number of characters from a string, from a start index (position) ,method does not change the original string.

// toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale

// toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale

// trim()	Returns a string with removed whitespaces

const STR = 'fromCharCode()	Returns Unicode values as characters'

const fromcharcode =String.fromCharCode(52, 21, 112, 100, 40000),
    endwith = STR.endsWith('characters'),
    codepointAt = STR.codePointAt(10);

console.log(`fromcharcode : ${fromcharcode} \n is String above endWith (characters) ? : ${endwith}
\n unicode index 10 as String above is : ${codepointAt} ; 
`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const STR2 = 'Returns if a string contains a specified value .';

const include = STR2.includes('if'),
    include2 = STR2.includes('contains', 20),
    concatstring = STR.concat(STR2),
    copies = STR2.repeat(3),
    replace = STR.replace('characters', 'String'),
    replaceFunction = STR.replace(/Returns|as|fromCharCode()|values|characters|Unicode/gi , x=> x.length);

console.log(` is include ? : ${include} 
\n is after index 20 value (contains) ? : ${include2}
\n Two String above is concat : ${concatstring}
\n repeat of string : ${copies}
\n replace in The string : ${replace}
\n replace in The function : ${replaceFunction}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


const str = 'Extracts a part of a string and returns a new string';
const space = 'My name is Peyman ';

const slice = str.slice(0, 20),
    sliceNagative = str.slice(-30),
    slipt = str.split("", 4),
    startWith = str.startsWith('Extracts'),
    substr = str.substr(1, 15),
    touppercase = STR.toLocaleUpperCase(),
    tolowercase = STR.toLocaleLowerCase();

console.log(`\nExtracts a part of a string : ${slice} \nA negative number selects from the end of the string : 
${sliceNagative} \n split of string : ${slipt} \n does string start with value (Extract) ? : ${startWith} \n  Extracts a part of a string (start : 1 and end : 15) : ${substr}\n Uppercase The String : ${touppercase}\n
LowerCase The String : ${tolowercase}\n remove space with Trim method : ${space.trim()} `);






















 let i = 10;

 let x = prompt('Enter A Number');

// while (i <= 1000) {

//     if (i == x) {
       
//        document.writeln( `<h2>${i}</h2>`)
//         i++
//         continue;
        
//     }
//     document.writeln(`${i},`);
//     i++;
// }


do{

    if (i == x) {
       
       document.writeln( `<h2 class>${i}</h2>`)
        i++
        continue;
    }

    document.writeln(`${i},`);
     i++;
}
while (i<1000);


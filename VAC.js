
///////////////////////////Main-Object///////////////////////////////////

function circle1() {
    return {

        color: 'red',

        console: function () {
            console.log('Hello Peyman')
        }
    }
}


const another = circle1();

another.name = 'Pride';
another.mode = 1400;
another.wheel = 4;
another.speed = 100000000 + 'km';


const Const = Object.keys(another);

console.log('/////////////////////// Keys ////////////////////');

console.log(Const);


const Const1 = Object.entries(another);

console.log('/////////////////////// entries ////////////////////');

console.log(Const1);


console.log('/////////////////////// For in ////////////////////');

for (const key in another) {

    console.log(another[key])
}

console.log('/////////////////////// For of ////////////////////');

for (const iterator of Const1) {

    console.log(iterator)

}


console.log('/////////////////////// New Object ////////////////////');

function Car1() {
    this.Number = `12 ${'ث'} 632`; 
}

const another1 = new Car1(); 

console.log('/////////////////////// Clone Object another ////////////////////');

////////////////////solution-one//////////////////

for (const key in another) {

    another1[key] = another[key]

}

console.log(another1);

////////////////////solution-Two//////////////////

const ano = Object.assign(another1, another);

console.log(ano);

////////////////////solution-Three//////////////////

const ano1 = { ...another }; 

console.log(ano1);











function PrintSeparate(conut) {

    this.STR = 'Peyman Khezli I am Enginner Computer';

    this.Counter = 0;

    this.Separate = () => {

        const interval = setInterval(() => {

            document.write(this.STR[this.Counter++]);
            console.log(this.Counter);
            if (this.Counter == this.STR.length) {
                clearInterval(interval);
            }

        }, conut);
    }

}

const another = new PrintSeparate(1000);

another.Separate();

// Addtion ramdomColor to Object

another.radomColor = () => {
    
    let letters = '123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        
        color += letters[Math.floor(Math.random() * 16)]
    }
    
    return color;
    
};

// Addtion ramdomNumber to Object

another.ramdomNumber = function (Min , Max) { 
    
   return Math.floor(Math.random() * (Max - Min) + Min)

}; 


console.log(another.radomColor());

console.log(another.ramdomNumber(10 , 20000));



//to navigate

for (const key in another) {

 console.log(key)
}

const Navigate = Object.keys(another); 

const Navigate0 = Object.entries(another); 

for (const iterator of Navigate0) {
    
    console.log(iterator)

}





















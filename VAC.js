
function Square(speed) {

    this.createSquare = () => {

        let set = setInterval(() => {

            let Element = document.createElement('div');
            document.body.append(Element);
            Element.style.backgroundColor = this.randomColor();
            Element.innerHTML = `${this.letter()} ${this.randomNumber(1, 100)}`;

        }, speed);
    }

    this.randomColor = () => {

        let letters = '0123456789ABCDEF'
        let color = '#';
        let i = 0;
        do {
            color += letters[Math.floor(Math.random() * 16)]
            i++
        } while (i < 6)

        return color;
    }

    this.randomNumber = function (min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    }

}

const another = new Square(1000);

// delete createSquare function

//delete another.createSquare;

another.createSquare();

// Addtion a property to another Object

another.color = 'red';

// Addtion a function to another Object

another.letter = function () {

    let STR = 'The English Language Center has been dedicated to providing English programs of the highest quality to international students since 1978'

    let random = STR[Math.floor(Math.random() * 136)];


    return random;

}



// delete Color property as another Object

delete another.color;

















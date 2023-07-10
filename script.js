class Cat {
    constructor(meow, loudMeow, color){
        this.meow = meow,
        this.loudMeow = loudMeow,
        this.color = color
    }
    quietMeow(){
        console.log(`${this.meow}`)
    }
    louderMeow(){
        console.log(`${this.loudMeow}`)
    }
    catColor(){
        console.log(`I am a ${this.color} cat!`)
    }

}

const Cat1 = new Cat('meowwwww',"MEOOOOOW!", 'black');
const Cat2 = new Cat('mew','MEOOOOWOWOW!', 'multi-color');

Cat1.quietMeow();
Cat1.louderMeow();
Cat1.catColor();

Cat2.quietMeow();
Cat2.louderMeow();
Cat2.catColor();


class Pirate {
    constructor(beardColor, sword, legs){
        this.beardColor = beardColor,
        this.sword = sword,
        this.legs = legs
    }
    beard(){
        console.log(`arrg! My beard is ${this.beardColor}`)
    }
    sword(){
        console.log(`I carry a ${this.sword}`)
    }
    legs(){
        console.log(`I have ${this.legs}`)
    }
}
const p1 = new Pirate('gray','cutlass',2);
const p2 = new Pirate('black', 'claymore', 1);
const p3 = new Pirate('red','katana', 0)
const jollyRoger = [
p1,p2,p3
]
for(let i = 0; i < jollyRoger.length; i++){
    console.log(jollyRoger[i]);
}
const p4 = new Pirate('gray','nunchucks',6);
const p5 = new Pirate('blue', 'spear', 1.5);
const p6 = new Pirate('magenta','master sword', 2.3);
const blackPearl = [
    p4, p5, p6
]
for(let i = 0; i < blackPearl.length; i++){
    console.log(blackPearl[i]);
}

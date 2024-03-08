class Player {
    #name
    #hp
    #power
    constructor(name,hp=100,power=10){
        this.#name = name;
        this.#hp = hp;
        this.#power = power;
    }

    damage(p){
        this.#hp -= p
        console.log(`${this.name} take ${p} damages`);
    }

    useItem(item){
        this.#hp += item.health
        this.#power += item.power

        console.log(`${this.#name} get hp+${item.health} power+${item.power}`)
    }

    showStatus(){
        // if(this.#hp>100){this.#hp=100}
        if(this.#hp<0){this.#hp=0}
        return {hp:this.#hp,power:this.#power}
    }

    get name(){ return this.#name}
}

class ShootingGame {
    #player1
    #player2
    #winner
    constructor(p1,p2){
        if(!(p1 instanceof Player) || !(p2 instanceof Player)){
            console.log("Game Error: Bukan Player");
        }
        this.#player1 = p1;
        this.#player2 = p2;
    }
    #getRandomItem(){
        if(Math.ceil(Math.random()*2)==1){
            return {health:10,power:0}
        }else{
            return {health:0,power:10}
        };
    }

    #deathCheck(){
        if(this.#player1.showStatus().hp <=0){
            this.#winner = this.#player1.name
        }
        if(this.#player2.showStatus().hp <=0){
            this.#winner = this.#player2.name
        }
        if(this.#winner){
            console.log(`|========| Winner : ${this.#winner} |========|`)
            return this.#winner
        }
    }

    #attackStep(){
        if(Math.ceil(Math.random()*2)==1){
            //Player 2 Atk first
            console.log("P2 Atk first");
            this.#player1.damage(this.#player2.showStatus().power)
            if(this.#deathCheck()){
                return
            }

            this.#player2.damage(this.#player1.showStatus().power)
        } else {
            //Player1 Atk first
            console.log("P1 Atk first");
            this.#player2.damage(this.#player1.showStatus().power)
            if(this.#deathCheck()){
                return
            }
            this.#player1.damage(this.#player2.showStatus().power)
            }

            console.log();    
            if(this.#deathCheck()){
                return
            }
    }

    #turn(turn){
        this.#player1.showStatus()
        this.#player2.showStatus()
        
        if(!this.#winner){
            console.log(`>>> Turn ${turn} <<<`);
            console.log(this.#player1.name +":",this.#player1.showStatus())
            console.log(this.#player2.name +":",this.#player2.showStatus())

            this.#player1.useItem(this.#getRandomItem())
            this.#player2.useItem(this.#getRandomItem())
            
            console.log();
            if(this.#attackStep()){
                return
            }
            console.log(this.#player1.name +":",this.#player1.showStatus())
            console.log(this.#player2.name +":",this.#player2.showStatus())
            console.log();
            this.#turn(turn+1)
        }
    }
    start(){
        this.#winner = undefined;
        this.#turn(1)
    }
    }

const p1 = new Player("Nartoh")
const p2 = new Player("Saskeh")
const  game = new ShootingGame(p1,p2);

game.start()
export class CounterService{

    countActive:number = 0; 

    countInActive:number = 0;

    addToActiveCounter(){       
       console.log('Counter: ' + this.countActive++);
    }
    addToInactiveCounter(){       
       console.log('Counter: ' + this.countInActive++);
    }
}
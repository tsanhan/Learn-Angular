import { CounterService } from './counter.service';
import { Injectable ,EventEmitter} from '@angular/core';



@Injectable()
export class UsersService{
    ActiveUsers: string[] = ['Max', 'Anna'];
    InactiveUsers: string[] = ['Chris', 'Manu'];

    UserActivated = new EventEmitter<string>();
    UserDeactivated = new EventEmitter<string>();

    constructor(private counter: CounterService){}

    AddToActivateUsers(name:string){
        this.ActiveUsers.push(name);
    }

    RemoveFromActivateUsers(id:number){
        this.ActiveUsers.splice(id,1);
    }


    AddToDeactivateUsers(name:string){
        this.InactiveUsers.push(name);
    }

    RemoveFromDeactivateUser(id:number){
        this.InactiveUsers.splice(id,1);
    }



   
}
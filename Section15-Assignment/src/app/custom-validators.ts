import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

export class CustomValidators {

    static invalidProjectName(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return { 'forbiddenName': true };
        }
        return null;
    }

    static asyncForbiddenName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {

            setTimeout(() => {
                if (control.value === 'TestProject') {
                    resolve({ 'forbiddenName': true });
                }
                resolve(null);
            }, 2000);
        })
        return promise;
    }
}
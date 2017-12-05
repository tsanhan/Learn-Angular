import {Http, Response, RequestOptionsArgs,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';

@Injectable()
export class ServerService {

    constructor(private http: Http) { }

    storeServers(servers: any):Observable<Response>{
        const headers = new Headers({'Content-Type':'application/json'});
       return this.http.put('https://section18-http.firebaseio.com/data.json', servers, { headers: headers });
        
    }

    getServers(){
        return this.http.get('https://section18-http.firebaseio.com/data')
        .map((response:Response)=>{
            const data = response.json();
            for(const server of data){
                server.name = 'Fetched_' + server.name;
            }
            return data;
        })
        .catch((response:Response)=>{
            return Observable.throw('something went wrong');
        });
    }

    getAppName(){
        return this.http.get('https://section18-http.firebaseio.com/appName.json')
        .map((res: Response)=>{
            return res.json();
        })
        
    }
}
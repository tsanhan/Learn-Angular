export class LoggingService{
    LogStatusChange(msg: string){
        console.log('A server status changed, new status: ' + msg);
    }

}
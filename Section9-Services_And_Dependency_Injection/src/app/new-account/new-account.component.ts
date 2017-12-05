import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  


  constructor(private logger: LoggingService, private accountsService: AccountsService ){
    this.accountsService.statusUpdated.subscribe(
   (status: string) => alert('new status: '+ status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    //this.logger.LogStatusChange(accountStatus);
  }
}
LoggingService
import { Component , ViewEncapsulation} from '@angular/core';
import { serverElement} from './serverElement.model'

@Component({
  selector: 'app-root'
  ,templateUrl: './app.component.html'
  ,styleUrls: ['./app.component.css']
  ,encapsulation: ViewEncapsulation.Emulated //Emulated is default(and is ususly used). it uses an emulation of 'Shadow DOM' to encapsulate the css file this component alone
//,encapsulation: ViewEncapsulation.None    // does not enapsulate nothing. the css is like global
//,encapsulation: ViewEncapsulation.Native  //it uses the real 'Shadow DOM' but not all browsers support it.

})
export class AppComponent { 
  serverElements:any[] = [new serverElement("server","asd","asd")];

  onServerAdded(srvElement: serverElement) {

    this.serverElements.push(srvElement);
  }

  onBlueprintAdded(srvElement: serverElement) {
    this.serverElements.push(srvElement);
  }

  onChangeFirst(){
    this.serverElements[0].name = 'changed!';
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}
 
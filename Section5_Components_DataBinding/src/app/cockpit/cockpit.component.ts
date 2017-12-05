import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {serverElement} from '../serverElement.model';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //declare delegates
  @Output("srvCreated") serverCreated = new EventEmitter<serverElement>();
  @Output("bpCreated") bluePrintCreated= new EventEmitter<serverElement>();

  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  //pass data to delegates
  onAddServer(serverNameInput: HTMLInputElement) {

    console.log(this.serverContentInput);
    var insert: serverElement = new serverElement('server',serverNameInput.value, this.serverContentInput.nativeElement.value);
    this.serverCreated.emit(insert);
    
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    var insert: serverElement = new serverElement('blueprint',serverNameInput.value, this.serverContentInput.nativeElement.value);
    this.serverCreated.emit(insert);
  }
}

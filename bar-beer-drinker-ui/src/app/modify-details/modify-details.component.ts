import { Component, OnInit } from '@angular/core';
import { ModifyService } from '../modify.service';

@Component({
  selector: 'app-modify-details',
  templateUrl: './modify-details.component.html',
  styleUrls: ['./modify-details.component.css']
})
export class ModifyDetailsComponent implements OnInit {

  constructor(
    public modifyService: ModifyService
  ) { }

  ngOnInit() {
  }
  text: string;

  disabled: boolean = true;
 
  modifications(){

  }
  toggleDisabled() {
      this.disabled = !this.disabled;
  }
}

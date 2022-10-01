import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/editor/form';
import { FormService } from 'src/app/editor/form.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  form:Form={category:"",
  style:{class:"",title:""},
  items:[
  ],
  title:"",userId:"1"
  };
  constructor(private formService:FormService) { }

  ngOnInit(): void {
    this.form=this.formService.getForm()
  }

}

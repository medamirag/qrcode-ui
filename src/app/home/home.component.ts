import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Form } from '../editor/form';
import { FormService } from '../editor/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  forms: Form[] = []
  baseUrl: string = environment.baseUrl
  searchWord: string = ""
  Originalforms: Form[] = []
  constructor(private formService: FormService) { }
  ngOnInit(): void {
    this.formService.getAllForms().subscribe(data => {this.forms = data;this.Originalforms=data})
  }

  search() {
    if (this.searchWord === "") {
      this.forms=this.Originalforms

      
    }
    else {
      this.forms=this.Originalforms
      this.forms = this.forms.filter(form => form.title.includes(this.searchWord)||form.category.includes(this.searchWord))


    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactForm:  FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }
}

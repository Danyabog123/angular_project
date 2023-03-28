import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    form!: FormGroup


    ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl('standart email', [Validators.email, Validators.required]),
        password: new FormControl('standart password', [Validators.minLength(5), Validators.maxLength(10)])
      })
    }

    submit() {
      console.log(this.form.value)
    }
}

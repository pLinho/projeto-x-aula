import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly us: UserService,
  ) { }

  ngOnInit() {
  }


  async acessar() {
    if (this.form.invalid) return;
    const raw: { username: string, password: string } = this.form.getRawValue();
    const bearer: string = await this.us.login(raw.username, raw.password) as any;

    localStorage.setItem('token', bearer);
  }
}

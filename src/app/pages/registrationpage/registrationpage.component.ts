import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    area: new FormControl('')
  })
  areas: string[] = [];
  image: string = "";

  displayError = false;


  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.apiService.getLocationsList().subscribe( x => this.areas = x.areas);
  }

  addImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    this.apiService.sendImage(file).subscribe(x => {
      if(x.success) this.image = x.url
    });
  }

  onSubmit(): void {
    if (this.registerForm.value.email !== '' &&
        this.registerForm.value.password !== '' &&
        this.registerForm.value.name !== '' &&
        this.registerForm.value.area !== '' &&
        this.registerForm.value.address !== '' &&
        this.image !== '') {
      this.apiService.register(
        {
          email: <string>this.registerForm.value.email,
          password: <string>this.registerForm.value.password,
          username: <string>this.registerForm.value.name,
          area: <string>this.registerForm.value.area,
          address: <string>this.registerForm.value.address,
          image: this.image
        }
      ).subscribe(
        res => {
          console.log(res)
          this.displayError = !res.success;
          if (res) {
            this.router.navigate([""]);
          }
        }
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private route: Router,private authService: AuthService) { }


  ingresar(){
    console.log(this.usuario);
    const { email, password} = this.usuario;
    this.authService.login(email, password).then(res =>{
      console.log("se registro:",res); 
      this.route.navigate(["admin"]);
    
    })
  } 

  ingresarConGoogle(){
    const { email, password} = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res =>{
      console.log("se registro:",res);
      this.route.navigate(["admin"]);
    })
  } 

  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res => {
      console.log(res?.email);
    })
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}

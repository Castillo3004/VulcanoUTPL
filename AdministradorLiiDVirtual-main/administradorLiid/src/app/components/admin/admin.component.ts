import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route:Router, private authservice: AuthService
  ) { }

  userLogged = this.authservice.getUserLogged();
  
  ngOnInit(): void {
  }

  event(){
    this.route.navigate(["admin/cevento"])
  }
  eventList(){
    this.route.navigate(["admin/listevento"])
  }
  logout(){
    this.authservice.logout();
    this.route.navigate(["login"])
  }

}

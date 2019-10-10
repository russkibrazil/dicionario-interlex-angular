import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClickEntrar(){
    this.router.navigate(['/','login']);
  }
}

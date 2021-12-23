import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() user: any;
  imgUrl: string;
  firstName: string;
  email: string;
  id: number;

  constructor() {
    this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcJS__a5zAHFv1jnF-Ti1xcATNexJqEO6pQ&usqp=CAU';
    this.firstName = '';
    this.email = '';
    this.id = 0;
   }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
    // this.imgUrl = this.user._links.avatars.href;
  }

}

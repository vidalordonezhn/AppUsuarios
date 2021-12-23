import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: number;
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcJS__a5zAHFv1jnF-Ti1xcATNexJqEO6pQ&usqp=CAU';
  name: string;
  email: string;
  status: string;
  genrer: string;
  loading=true;

  constructor(private aRoute: ActivatedRoute, private _usuarioService: UsuarioService) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id');
    this.name = '';
    this.email = '';
    this.status = '';
    this.genrer = '';
  }

  ngOnInit(): void {
    this.getUsuario();
  }


  getUsuario(){
    this._usuarioService.getUsuario(this.id).subscribe(data => {
      this.name = data.data.name;
      this.email = data.data.email;
      this.status = data.data.status;
      console.log(data.data);
      this.loading = false;
    })
  }

}

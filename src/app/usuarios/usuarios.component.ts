import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
	public usuarios : Usuario[];
	public selectedUsuario : Usuario = new Usuario;
	public loading : boolean = false;
	public islogged : boolean = false;

	constructor(private usuariosService:UsuariosService, private authService:AuthService) { }

	ngOnInit() {
		this.obtenerUsuarios();
		this.refrescar();
	}

	public editarUsuario(usuario){
		console.log('edit',usuario);
		this.selectedUsuario = Object.assign({}, usuario);
	}

	public editarUsuarioSave(usuario){
		this.usuariosService.editarUsuario(usuario.usuario)
			.then(data => {
				usuario.form.reset();
				this.obtenerUsuarios();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public borrarUsuario(usuario){
		this.usuariosService.borrarUsuario(usuario)
			.then(data => {
				this.obtenerUsuarios();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public obtenerUsuarios(){
		this.usuariosService.obtenerUsuarios().subscribe((data) => {
				console.log('data',data);
				this.usuarios = data.user;
			});
	}


	public agregarUsuario(usuario:any){
		this.loading = true;
		delete usuario.usuario._id;
		this.usuariosService.agregarUsuario(usuario.usuario)
			.then(data => {
				console.log('usuario agregado');
				usuario.form.reset();
				this.loading = false;
				this.obtenerUsuarios();
			})
			.catch(error => {
				console.log('error',error);
				this.loading = false;
				alert('El usuario seleccionado ya existe, por favor seleccione otro');
			});
	}

	refrescar(){
  	this.islogged=false;
  	console.log('entro al usuario oninit');
  	if(this.authService.islogged==true){
  		this.islogged=true;
  	}
  	console.log('usuario is logged:',this.islogged);
  }

}

import { Usuario } from "./usuario";

export class Cliente extends Usuario {

    constructor(
        id: number,
        nombre: string,
        email: string,
        private rol: string
    ) {
        super(id, nombre, email);
    }


    mostrarInformacion(): void {
        console.log(`ID: ${this.getId()}, Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}`);
    }

}
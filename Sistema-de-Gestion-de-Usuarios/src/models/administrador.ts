import { Usuario } from "./usuario";

export class Administrador extends Usuario {

    constructor(
        id: number,
        nombre: string,
        correo: string,
    ) {
        super(id, nombre, correo);
    }
    public getId(): number {
        return this.id;
    }

    public mostrarInformacion(): void {}
}
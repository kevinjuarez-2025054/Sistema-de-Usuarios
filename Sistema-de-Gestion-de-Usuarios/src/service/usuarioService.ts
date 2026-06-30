import { Usuario } from "../models/usuario";

export class SistemaUsuarios {

    private usuarios: Usuario[] = [];

    public registrar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    public buscar(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.getId() === id);
    }

    public mostrarTodos(): void {

        this.usuarios.forEach(usuario => {

            usuario.mostrarInformacion();
            console.log("--------------------------");

        });

    }

}
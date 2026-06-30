import { Cliente } from "../models/cliente";
import { Administrador } from "../models/administrador";

export class Datos {

    public static clientes: Cliente[] = [

        new Cliente(1, "Rodrigo", "rodrigo@gmail.com", "Guatemala"),
        new Cliente(2, "Ana", "ana@gmail.com", "Mixco"),
        new Cliente(3, "Luis", "luis@gmail.com", "Villa Nueva")

    ];

    public static administradores: Administrador[] = [

        new Administrador(10, "Carlos", "carlos@gmail.com", "General"),
        new Administrador(11, "María", "maria@gmail.com", "Supervisor")

    ];

}
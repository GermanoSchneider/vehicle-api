import CreateVehicle from "./create.vehicle";
import GetAllVehicles from "./get.all.vehicles";
import GetVehicle from "./get.vehicle";
import RemoveVehicle from "./remove.vehicle";
import Server from "./server";
import VehicleRepository from "./vehicle.repository";

export default class RoutesConfig {

    server: Server;
    repository: VehicleRepository;
    constructor({server, repository}: {server: Server, repository: VehicleRepository}) {
        this.server = server;
        this.repository = repository;
    }

    build(): void {
        this.server.on({method: 'get', url: '/', fn: async (params: any, body: any) => {
            return await new GetAllVehicles({repository: this.repository}).execute();
        }});
        this.server.on({method: 'get', url: '/${plate}', fn: async (params: any, body: any) => {
            return await new GetVehicle({repository: this.repository}).execute(params.plate);
        }});
        this.server.on({method: 'post', url: '/', fn: async (params: any, body: any) => {
            return await new CreateVehicle({repository: this.repository}).execute(body);
        }});
        this.server.on({method: 'delete', url: '/${plate}', fn: async (params: any, body: any) => {
            return await new RemoveVehicle({repository: this.repository}).execute(params.plate);
        }});
    }

}
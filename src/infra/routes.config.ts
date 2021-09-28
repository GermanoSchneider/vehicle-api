import CreateVehicle from "../domain/usecases/create.vehicle";
import GetAllVehicles from "../domain/usecases/get.all.vehicles";
import Server from "../domain/server";
import VehicleRepository from "../domain/repositories/vehicle.repository";
import GetVehicle from "../domain/usecases/get.vehicle";
import RemoveVehicle from "../domain/usecases/remove.vehicle";
import Plate from "../domain/plate";

export default class RoutesConfig {

    server: Server;
    repository: VehicleRepository;
    constructor({server, repository}: {server: Server, repository: VehicleRepository}) {
        this.server = server;
        this.repository = repository;
    }

    build(): void {
        this.server.on({method: 'get', url: '/', fn: async (params: any, body: any) => {
            return await new GetAllVehicles({repository: this.repository}).execute().catch(error =>  { throw error });
        }});
        this.server.on({method: 'get', url: '/${plate}', fn: async (params: any, body: any) => {
            return await new GetVehicle({repository: this.repository}).execute(new Plate(params.plate)).catch(error =>  { throw error });
        }});
        this.server.on({method: 'post', url: '/', fn: async (params: any, body: any) => {
            return await new CreateVehicle({repository: this.repository}).execute(body).catch(error => { throw error });
        }});
        this.server.on({method: 'delete', url: '/${plate}', fn: async (params: any, body: any) => {
            return await new RemoveVehicle({repository: this.repository}).execute(new Plate(params.plate)).catch(error =>  { throw error });
        }});
    }

}
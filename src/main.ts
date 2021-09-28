import ExpressServer from "./infra/express.server";
import RoutesConfig from "./infra/routes.config";
import VehicleMemoryRepository from "./infra/vehicle.memory.repository";

const server = new ExpressServer();
const repository = new VehicleMemoryRepository();
const routes = new RoutesConfig({server: server, repository: repository});
routes.build();
server.listen({port: 8080});
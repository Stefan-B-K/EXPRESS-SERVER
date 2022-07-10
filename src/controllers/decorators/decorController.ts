import 'reflect-metadata'
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller (): Function {

    return function (target: Function): void {

        const router = AppRouter.instance

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)
            const route = Reflect.getMetadata(MetadataKeys.route, target.prototype, key)
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || []


            if (route) router[method](route, ...middlewares, routeHandler)
        }
    }
}
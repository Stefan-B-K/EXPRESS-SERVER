import 'reflect-metadata'
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler
}

function routeMethod(method: string) {
    return function (route: string) {
        return function (target: any, key: string, desc: RouteHandlerDescriptor) {
            Reflect.defineMetadata(MetadataKeys.method, method, target, key)
            Reflect.defineMetadata(MetadataKeys.route, route, target, key)
        }
    }
}

export const get = routeMethod(Methods.get)
export const post = routeMethod(Methods.post)
export const put = routeMethod(Methods.put)
export const del = routeMethod(Methods.del)
export const patch = routeMethod(Methods.patch)

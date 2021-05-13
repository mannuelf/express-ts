import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { Request, Response, NextFunction, RequestHandler } from 'express';

// check if all the keys are presen in request body
function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {};
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    // the target will be a constructor function, target.prototype.
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
        [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}

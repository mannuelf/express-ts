import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDecorator) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];

    // middlewares.push(middleware);

    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}

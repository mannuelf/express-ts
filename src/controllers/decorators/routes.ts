import 'reflect-metadata';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routerBinder('get');
export const put = routerBinder('put');
export const post = routerBinder('post');
export const patch = routerBinder('patch');
export const delete = routerBinder('delete');

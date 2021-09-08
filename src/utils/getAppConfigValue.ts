import { environment } from '@constant/environment';
import appConfig from '../../app.config.json';

export function getAppConfigValue(path: string) {
  const originalPath = path;
  const splitPath = path.split('.');

  function parseJsonPath(currentObj: any, currentPath: string[]) {
    const path = currentPath.shift();

    if (path) return parseJsonPath(currentObj[path], currentPath);
    if (typeof currentObj === 'string' && currentObj.length === 0)
      return getEnvironment(originalPath);
    return currentObj;
  }

  return parseJsonPath(appConfig, splitPath);
}

function getEnvironment(path: string) {
  const newPath = path.toUpperCase().replace(/\./gi, '_');
  return environment[newPath];
}

import appConfig from '../../app.config.json';

export function getAppConfigValue(path: string) {
  const splitPath = path.split('.');

  function parseJsonPath(currentObj: any, currentPath: string[]) {
    const path = currentPath.shift();

    if (path) return parseJsonPath(currentObj[path], currentPath);
    if (typeof currentObj === 'string' && currentObj.length === 0) return;
    return currentObj;
  }

  return parseJsonPath(appConfig, splitPath);
}

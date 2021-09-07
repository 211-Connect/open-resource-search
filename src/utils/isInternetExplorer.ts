export default function isInternetExplorer() {
  const userAgentString = navigator.userAgent;
  const IExplorerAgent =
    userAgentString.indexOf('MSIE') > -1 || userAgentString.indexOf('rv:') > -1;

  return IExplorerAgent;
}

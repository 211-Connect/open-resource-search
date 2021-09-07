export function If({ value, children }) {
  if (value) return <>{children}</>;
  return null;
}

export default If;

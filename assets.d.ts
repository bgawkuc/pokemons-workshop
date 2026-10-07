// Metro resolves image imports to an asset id; TypeScript needs to be told they are modules.
declare module '*.png' {
  const source: number
  export default source
}

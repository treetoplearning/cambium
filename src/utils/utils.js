export const getHeartwoodLink = () => {
  if (typeof process.env.GATSBY_HEARTWOOD_LINK === "undefined") {
    return "https://develop.app.treetoplearning.org"
  }
  return process.env.GATSBY_HEARTWOOD_LINK
}

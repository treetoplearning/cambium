export const getHeartwoodLink = () => {
  if (typeof process.env.GATSBY_HEARTWOOD_LINK === "undefined") {
    return "https://dev.treetoplearning.org"
  }
  return process.env.GATSBY_HEARTWOOD_LINK
}

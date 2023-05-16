export const formatIdTitle = (stringToUse) => {
  const formatStringToUse = typeof stringToUse === "string" ? stringToUse : stringToUse[0]
  const regex = /[^A-Za-z0-9]+/g
  let outputString = formatStringToUse.replace(regex, "-")
  if (outputString.endsWith("-")) {
    outputString = outputString.slice(0, -1)
  }
  return outputString
}

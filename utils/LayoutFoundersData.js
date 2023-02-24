export const LayoutFoundersData = ({
  TITLE,
  ORIGINAL_TITLE,
  SOURCE_URL,
  SOURCE_AUTHOR,
  SOURCE_DAY,
  SOURCE_MONTH,
  SOURCE_YEAR,
  DATA_TO_SHOW,
  isMultipleSources = false,
  MULTIPLE_REFERENCES
}) => {
  if (isMultipleSources === false) {
    return {
      title: TITLE,
      source: {
        originalTitle: ORIGINAL_TITLE,
        sourceUrl: SOURCE_URL,
        author: SOURCE_AUTHOR,
        day: SOURCE_DAY,
        month: SOURCE_MONTH,
        year: SOURCE_YEAR
      },
      theData: DATA_TO_SHOW,
      isMultipleSources
    }
  }

  return {
    title: TITLE,
    source: MULTIPLE_REFERENCES,
    theData: DATA_TO_SHOW,
    isMultipleSources
  }
}

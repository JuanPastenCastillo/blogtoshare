export const LayoutFoundersData = ({ TITLE, ORIGINAL_TITLE, SOURCE_URL, DATA_TO_SHOW }) => {
  return {
    title: TITLE,
    source: {
      originalTitle: ORIGINAL_TITLE,
      sourceUrl: SOURCE_URL
    },
    theData: DATA_TO_SHOW
  }
}

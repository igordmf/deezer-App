function stringCompareRegex(trackString, inputedString) {
  return(
    trackString
      .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
            .includes(inputedString
              .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()));
}

export default stringCompareRegex;
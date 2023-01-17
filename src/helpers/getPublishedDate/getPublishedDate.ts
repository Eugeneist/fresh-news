const getPublishedDate = (published: string): any => {
  let date = new Date(published);
  let month = date.toLocaleString('en-US', { month: 'long' });
  let day = date.getDate();
  let year = date.getFullYear();

  const nth = function (day: number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  let publishedDate: string =
    `${month}` + ' ' + day + nth(day) + ' ' + `${year}`;

  return publishedDate;
};

export default getPublishedDate;

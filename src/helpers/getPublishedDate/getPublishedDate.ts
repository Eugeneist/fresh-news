const getPublishedDate = (published: string): any => {
  let date = new Date(published);
  let month = date.toLocaleString('en-US', { month: 'long' });
  let day = date.getDate();
  let year = date.getFullYear();

  let publishedDate: string = `${month} ${day} ${year}`;

  return publishedDate;
};

export default getPublishedDate;

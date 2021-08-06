const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  header.className = 'header';
  dateSpan.className = 'date';
  tempSpan.className = 'temp';

  header.appendChild(dateSpan);
  header.appendChild(titleH1);
  header.appendChild(tempSpan);

  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerFunc = Header('Lambda Times', 'August 6 2021', '57')
  const element = document.querySelector(selector);
  element.appendChild(headerFunc);

  return element;
}

export { Header, headerAppender }

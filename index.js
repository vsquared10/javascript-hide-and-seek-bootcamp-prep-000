function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var elem = document.getElementById('grand-node');
  var select = `#grand-node `;
  while (elem.children[0]) {
    select += 'div ';
    elem = elem.children[0];
  }
  return document.querySelector(select.trim());
}

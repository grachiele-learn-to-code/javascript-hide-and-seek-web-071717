function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const ranks = document.getElementsByClassName("ranked-list")

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = i + n
  }
}

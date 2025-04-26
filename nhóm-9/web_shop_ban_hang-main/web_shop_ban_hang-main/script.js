const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})


fetch('partials/header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('header-placeholder').outerHTML = data;
      });
fetch('partials/footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-placeholder').outerHTML = data;
      });

    
      

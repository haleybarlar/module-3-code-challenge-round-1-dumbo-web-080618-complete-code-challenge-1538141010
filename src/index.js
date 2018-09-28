document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = 'b374cace-6a95-43fe-829e-1bb4d0f87db6'
  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
  let imageId = 882
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const container = document.querySelector(".container")

  function fetchAll() {
    return fetch(imageURL)
    .then(res => res.json())
  }

  function renderThem() {
    let information = fetchAll()
    information.then(resp => {
      let imageCard = document.querySelector("#image-card")

      let src = document.querySelector("#image")
      image.src = `https://randopic.herokuapp.com/images/${yourUUID}`
      src.appendChild(image)

      let name = document.querySelector("#name")
      name.innerText = resp.name

      let likes = document.querySelector("#likes")
      likes.innerText = resp.like_count

      // comments = document.querySelector("#comments")
      // comments.innerText = information.comments[0].content

      imageCard.appendChild(image, name, likes, comments)
      container.append(imageCard)
    })
  }
  //
  renderThem()

})

const body = document.querySelector("body");

const parent = document.createElement("div");
parent.className = "parent";

const child = document.createElement("div");
child.className = "child";

let orderedList = document.createElement("ol");
// orderedList.className = 'breadcrumb'

body.style.backgroundColor = 'lightgrey'

let topStoriesURL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

parent.appendChild(child);

body.appendChild(parent);
child.appendChild(orderedList);

fetch(topStoriesURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 100; i++) {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
      )
        .then((response2) => {
          return response2.json();
        })
        .then((data2) => {
          console.log(data2);
          let div = document.createElement("div")
          div.className = "card bg-dark"
          div.style.width = '650px'
          div.style.height = '70px'
          
          
         
          
          orderedList.appendChild(div)
          let newlistItem = document.createElement("li");
          div.appendChild(newlistItem);
          // newlistItem.style.marginTop = `10px`
          // newlistItem.className = 'bg-dark p-3'
          let newstoryTitle = document.createElement("a");
          newlistItem.appendChild(newstoryTitle);
          // newstoryTitle.className = "card-title";
          newstoryTitle.innerText = data2.title;
          newstoryTitle.href = data2.url;
          let scoreUserComment = document.createElement("p");
          newlistItem.appendChild(scoreUserComment);
          scoreUserComment.className = 'belowInfo'
          
          // scoreUserComment.className = "card-text";
          scoreUserComment.innerText = `Submitted by: ${data2.by} || Score: ${data2.score} || Comments: ${data2.descendants}`;
          scoreUserComment.style.marginLeft = "10px"
          
          // let newstoryScore = document.createElement("p");
          // newlistItem.appendChild(newstoryScore);
          // newstoryScore.className = "score";
          // newstoryScore.innerText = `Score: ${data2.score}`;
          // let newstoryComments = document.createElement("p");
          // newlistItem.appendChild(newstoryComments);
          // newstoryComments.className = "comments";
          // newstoryComments.innerText = `Comments: ${data2.descendants}`;
        });
    }
  });

// for(let i = 0; i < 99; i++){
//     console.log(topStoriesArray[i])
// fetch(`https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty`)
// .then(response => {
//     console.log(response.json())
// })
// // .then (data => {
// //     console.log(data)
// // })
// }

//Find the total number of likes for GooseyBouy's posts


let dataFromServer = {
    "user": "gooseybouy",
    "posts": [
        { "title": "The meaning of LOTP", "contents": "...", "likes": 42  },
        { "title": "History behind my name", "contents": "...", "likes": 301 },
        { "title": "What really happens in the Tech Lead meetings", "contents": "...", "likes": 3}
    ]
};

let fetchFromServer = Promise.resolve(dataFromServer);

fetchFromServer.then(data => data.posts)
  .then(posts => posts.map(p => p.likes))
  .then(likes => likes.reduce((acc, x) => acc + x))
  .then(console.log);






//song list
let All_song = [
    {
      name: "Exyl - MOAI🗿",
      path: "music/Exyl - MOAI.mp3",
      img: "images/1.jpg",
      singer: "Exyl"
    },
    {
      name: "Ross bugden - Run",
      path: "music/Ross bugden - Run.mp3",
      img: "images/2.jpg",
      singer: "Ross bugden"
    },
    {
      name: "Ross bugden - Welcome to Chaos",
      path: "music/Ross bugden - Welcome to Chaos.mp3",
      img: "images/3.jpg",
      singer: "Ross bugden"
    }
 ];
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
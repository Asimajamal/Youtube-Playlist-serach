//code for a unique playlist and searching any video in that playlist
// import React, { useEffect, useState } from "react";

// const Youtubee = () => {
//   const [videos, setVideos] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState([]);

//   const fetchData = async () => {
//     const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLxxubppkxDkdjC1JJivQyiAGpMNTtgSxo&maxResults=50&key=AIzaSyB7MoEqFcw2eWTnf63op_eOnQhGueluASY`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setVideos(data.items);
//     setFilter(data.items);
//   };

//   const handelChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();

//     const newFilter = videos.filter((video) => {
//       //  video.snippet.title
//       //   .toLocaleLowerCase()
//       //   .includes(search.toLocaleLowerCase());

//       //console.log(`VIDEO TITLE: ${video.snippet.title} == ${search}`);

//       if (
//         video.snippet.title
//           .toLocaleLowerCase()
//           .includes(search.toLocaleLowerCase())
//       ) {
//         console.log("Displaying video")
//         //console.log(video);
//         return (     
//                       <div>{video}</div>
//                 );
//       }
      
      
//     });

//     setFilter(newFilter);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className={{ width: "100vw", height: "100vh" }}>
//       <form
//         onSubmit={handelSubmit}
//         style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
//       >
//         <input
//           type="search"
//           placeholder="Enter Url"
//           onChange={(e) => handelChange(e)}
//           value={search}
//           style={{
//             margin: "2rem",
//             padding: "1rem",
//             fontSize: "1.4rem",
//             width: "60%",
//             marginLeft: "auto",
//             marginRight: "auto",
//           }}
//         />

//         <button
//           type="submit"
//           style={{
//             padding: "1rem",
//             fontSize: "1.4rem",
//           }}
//         >
//           Search
//         </button>
//       </form>

//       {filter.map((video, key) => {
//         return (
//           <div key={key} style={{ backgroundColor: "#fcf4bd" }}>
            
//               <div style={{ margin: "1rem", width: "100%", display: "flex" }}>
//                 <div style={{ width: "40%" }}>
//                   <iframe
//                     width={450}
//                     height={200}
//                     style={{ margin: "1rem" }}
//                     src={`https:www.youtube.com/embed/${video.snippet.resourceId.videoId} `}
//                     title="YouTube video player"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>

//                 <div style={{ margin: "1rem", width: "60%" }}>
//                   <b>{video.snippet.title}</b>
//                   <p>{video.snippet.description.split(".")[0]}</p>
//                 </div>
//               </div>
//             )
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Youtubee;

//code for searching any Playlist thorugh URL  and fetching all videos on page in that playlist
import React, {  useState } from "react";
import VideoPlay from "./VideoPlay";
// import VideoPlay from "./VideoPlay";

const Youtubee = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const fetchData = async () => {
    const playlistUrl = search.split("=");
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${
      playlistUrl[playlistUrl.length - 1]
    }&maxResults=50&key=AIzaSyB7MoEqFcw2eWTnf63op_eOnQhGueluASY`;
    const response = await fetch(url);
    const data = await response.json();
    setFilter(data.items);
  };

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleClick=(value)=>
  {
      window.open(value,'_blank')
  }
  

  return (
    <div className={{ width: "100vw", height: "100vh" }}>
      <form
        onSubmit={handelSubmit}
        style={{ width: "70%",  marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="search"
          placeholder="Enter Url"
          onChange={(e) => handelChange(e)}
          value={search}
          style={{
            margin: "2rem",
            padding: "1rem",
            fontSize: "1.4rem",
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            
          }}
        />

        <button
          type="submit"
          style={{
            padding: "1rem",
            fontSize: "1.4rem",
           
          }}
        >
          Search
        </button>
      </form>

      {filter.length > 0 ? (
        filter.map((video) => {
          return (
            <div key={video.id} style={{ backgroundColor: "#fcf6bd" }}>
              
               
                <div style={{ margin: "1rem", width: "100%", display: "flex" }}>
                  <div style={{ width: "40%" }}>
                   
                      <iframe  width={450}
                    
                      height={200}
                      style={{ margin: "1rem" }}
                      src={`https:www.youtube.com/embed/${video.snippet.resourceId.videoId}  ` }
                      title="YouTube video player"
                      allow="accelerometer; autoplay 'src'; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onClick={()=>handleClick(`https:www.youtube.com/embed/${video.snippet.resourceId.videoId}  `)}
                    ></iframe>
                    
                  </div>
                  

                  <div style={{ margin: "1rem", width: "60%" }}>
                    <b>{video.snippet.title}</b>
                    <p>{video.snippet.description.split(".")[0]}</p>
                  </div>
                </div>
              
            </div>
          );
        })
      ) : (
        <h1 style={{ marginLeft: "30%" }}>Playlist Videos will be display here</h1>
      )}
    </div>
  );
};

export default Youtubee;
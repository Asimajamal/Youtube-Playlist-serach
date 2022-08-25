import React, { useEffect, useState } from "react";

const Youtubee = () => {
  const [videos, setVideos] = useState([1, 2, 3, 4, 5]);
  const [search, setSearch] = useState("Hello");

  const fetchData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9bw4S5ePsEEqCMJSiYZ-KTtEjzVy0YvK&key=AIzaSyB7MoEqFcw2eWTnf63op_eOnQhGueluASY`;
    const response = await fetch(url);
    const data = await response.json();
    setVideos(data);
  };

  const handelChange = (e) => {
    setSearch(e.target.value);
    fetchData();
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Enter Url"
          onChange={(e) => handelChange(e)}
          value={search}
        />

        {videos.map((video, key) => {
          return (
            <div key={key}>
              <div> HELLo </div>
              {!video ? <h1>No Url Found</h1> : <div>{video}</div>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Youtubee;

//   .then((resJson) => {
//     const result = resJson.items.map((playlistt) => ({
//       ...playlistt,
//     }));

// setVideos(result.contentDetails);
//   });

{
  /* 
    <div>
      {videos.map((item) => {
        return (
          <div>
            <div>
              <input
                type="search"
                placeholder="Enter Url"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></input>
            </div>
            {!item ? <h1>No Url Found</h1> : <div>{item.contentDetails}</div>});
          </div> */
}
{
  /* ); */
}
{
  /* })} */
}
{
  /* </div> */
}
{
  /* ); */
}

import React ,{ useEffect, useState } from "react";
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

const Youtubee=()=>
  const handelChange = (e) => {
    setSearch(e.target.value);
    fetchData();
  };

{
    const[videos,setVideos]=useState([]);
    const[search,setSearch]=useState('')
  useEffect(() => {
    // fetchData();
  }, []);

    useEffect(()=>{
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Enter Url"
          onChange={(e) => handelChange(e)}
          value={search}
        />

        const fetchApi= ()=>{
            const url=`https://www.googleapis.com/youtube/v3/playlists?q=${search}&appid=AIzaSyB7MoEqFcw2eWTnf63op_eOnQhGueluASY`
            fetch(url).then((response)=>response.json()).then((resJson)=>{
                const result=resJson.items.map(playlistt=>({
                    ...playlistt
                }));


                setVideos(result.contentDetails);
            })

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

        }
        fetchApi();
    },[search])
export default Youtubee;

    return(
//   .then((resJson) => {
//     const result = resJson.items.map((playlistt) => ({
//       ...playlistt,
//     }));

    <div>
// setVideos(result.contentDetails);
//   });

        {
            videos.map((item)=>{
                return(
                    <div>
                        <div>
                        <input type="search" placeholder="Enter Url" onChange={(e)=>{
                     setSearch(e.target.value)
                    }}></input></div>
                    {
                    !item? (<h1>No Url Found</h1>)
                    :(<div>{item.contentDetails}</div>)
                    });



                    </div>
                );
            })
        }

    </div> 
)}

export default Youtubee; 
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
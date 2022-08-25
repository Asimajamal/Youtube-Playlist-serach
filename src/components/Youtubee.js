import React ,{ useEffect, useState } from "react";



const Youtubee=()=>

{
    const[videos,setVideos]=useState([]);
    const[search,setSearch]=useState('')

    useEffect(()=>{

        const fetchApi= ()=>{
            const url=`https://www.googleapis.com/youtube/v3/playlists?q=${search}&appid=AIzaSyB7MoEqFcw2eWTnf63op_eOnQhGueluASY`
            fetch(url).then((response)=>response.json()).then((resJson)=>{
                const result=resJson.items.map(playlistt=>({
                    ...playlistt
                }));
            
             
                setVideos(result.contentDetails);
            })
            

        }
        fetchApi();
    },[search])

    return(

    <div>

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
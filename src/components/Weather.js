import { useEffect, useState } from "react";


export default function Weather(){
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    
          await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        }
        fetchData();
      }, [lat,long])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
    
        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)
      }, [lat, long]);
    return(
        <div className="border border-pink-600 bg-transparent w-2/6 text-center absolute top-0 right-0 rounded-md">
            <p className="text-lg"> Current Temperature: {data.main.temp}</p>
        </div>
    )
}
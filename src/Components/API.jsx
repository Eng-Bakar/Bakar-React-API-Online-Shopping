import  { useEffect, useState } from "react"
import axios from "axios"
import  ClipLoader from "react-spinners/HashLoader"
function API (){
    const [data, setdata] = useState([])
    const [loading,setLoading] = useState(false)
    const handleGetData = () => {
        setLoading(true)
        axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
            console.log(response.data)
            setdata(response.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            
        })
    }

    useEffect (() => {
        handleGetData()
    },[])
    return loading == true ? <ClipLoader loading={loading} /> : <div>
        <div className="bg-black w-full sm:grid sm:grid-cols-[200px_200px_200px_200px_200px] pl-[50px] sm:pl-[80px] sm:gap-x-[20px] gap-[30px]  pt-[100px] absolute">
            {
                data.map((user) => {
                    return <div className="  text-white mb-[20px]">
                        <img className="sm:w-[200px] w-[300px] h-[290px] sm:h-[200px]" src={user.images} alt="" />
                        <p className="pt-[10px] sm:text-[20px] text-[25px] ">Price: $<span className="font-semibold">{user.price}</span> </p>
                        <h1 className="font-bold sm:text-[20px] text-[30px]">{user.title} </h1>

                    </div>
                })
            }
        </div>
       

    </div>
}
export default API
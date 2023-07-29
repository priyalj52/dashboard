import React, { useEffect, useState } from 'react'
import {FiRefreshCcw} from "react-icons/fi"
import {AiOutlineDownload} from "react-icons/ai"
import {BsFilter} from "react-icons/bs"
import TableData from './TableData'
const Feed = () => {
  const [data,setData]=useState([]) //api data
  const [search,setSearch]=useState("")//search input
  const [filteredData, setFilteredData] = useState([]); //filtered data after search
  const [showTable, setShowTable] = useState(false); // table visibility


  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
 const data=await fetch("https://jsonplaceholder.typicode.com/users")
 .then((response) => response.json())
 .then((res)=>{console.log(res)
  setData(res)
  setFilteredData(res);}
)

 .catch((err)=>{console.log(err)})
  }
  const handleSearch = () => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  useEffect(() => {
    // Real-time filtering as the user types in the search input
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };


    return (
  <div>
 <div className='absolute top-[5rem] bg-[#F4F8F9]  w-full left-[3rem ] items-center'>
     <div className="main-tab flex items-center justify-between p-5">
       <div className="left flex mt-2  gap-4">
        <div className="headings flex gap-2 bg-white ml-3 cursor-pointer p-2" style={{width:"80%"}}>
          <span className='hover:bg-[#026DFE]'>Users</span> 
          <span className='hover:bg-[#026DFE]'>Campaign</span>
          <span className='hover:bg-[#026DFE]'     onClick={handleToggleTable}>Tables</span>
          <span className='hover:bg-[#026DFE]'>List</span>

        </div>
        <div className='m-2'> <FiRefreshCcw/></div>
     
        <button class="bg-white hover:bg-gray-100 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center">
        <AiOutlineDownload/> 
  <span>Download</span>
</button>
       
       </div>
       <div className="right mr-[10%] flex flex-wrap gap-2 items-center">
       <input type="text" placeholder='  Search for influencer' onChange={(e)=>setSearch(e.target.value)} onKeyUp={handleKeyPress} class="bg-white hover:bg-gray-100 text-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow outline-none"/>
<button  onClick={handleSearch} className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Search
</button>
      <div><BsFilter/></div>
       </div>
     </div>
    
     <div className=" tables bg-white flex justify-around  mt-2 w-[80%] ml-[5%] p-4 rounded-md ">

<span >Created At</span>
<span>Name</span>
<span>Username</span>
<span>Email</span>



     </div>
     
        {search === '' ? (
          // Show unfiltered data when search is empty
          data.map((item) => (
            <div key={item.id} className="flex flex-col">
              <TableData name={item.name} email={item.email} userName={item.username} id={item.id} />
            </div>
          ))
        ) : (
          // Show filtered data when search button is clicked
          filteredData.map((item) => (
            <div key={item.id} className="flex flex-col">
              <TableData name={item.name} email={item.email} userName={item.username} id={item.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
          }
  export default Feed;






  
   




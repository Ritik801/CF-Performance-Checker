import React from "react"
export default function Getdata(props){
    const [x,setx]=React.useState("")
    const [loading,setloading]=React.useState(true)
    const [boolx,setboolx]=React.useState(false)
    const [comnt,setcomnt]=React.useState("djdjd")
   
     const [boolcmnt,setboolcmnt]=React.useState(false)
     const [value,setvalue]=React.useState([{id:1,val:-1}])


    
   console.log(boolcmnt)
const getData = async () => {
  console.log("hellloooo")
  let url=`https://codeforces.com/api/user.status?handle=${props.data}`
   
    setloading(true);
    const response = await fetch(url );
    const data = await response.json();
   setloading(false);
    
    console.log(data)
    console.log(x)
    console.log("hellloooouuuuuuuuuuuu")
let cnt=0,vir=0,total=0;
console.log(data.status==="OK")
 if(data!==""&&data.status==="OK"){
         setboolx(true)
 data.result.map((y)=>{
       if(y.verdict==="OK"){
         if(y.author.participantType === "CONTESTANT"){
            cnt++
         }else if(y.author.participantType === "VIRTUAL"){
                 vir++;
         }
         total++;

       }
       


     })
     
    // setboolx(true);
     let ab=[{id:1,val:total} ,{id:2,val:cnt},{id:3,val:vir}]
     console.log("hello")
     setvalue(ab)
     
      
     console.log("in there")
     console.log(total)

  }else {
    console.log(data.comment)
 //  setboolcmnt(true)
  // setcomnt(x.comment)
   //console.log(x.comment)
   


  }
  setx(data);



    
    
  };
 

  /* const async ()=>{
      await
   }*/
   
   // let ab=[{id:1,val:-1}]
    React.useEffect(()=>{
     // setloading(true)
      getData();

      


    },[])
     
    let d=0;
  //  let c=x.result
  let vir=0,total=0,cnt=0;
  let bcomment=false,comment=""
  console.log(x)
  console.log(value)

  
 console.log(boolcmnt)
 console.log(comnt)
 if(loading){
   return(
     <div>
     <h1>Loading </h1>
     </div>
   )
 }else{
   if(x.status==="OK"){

   
   return(
   <div>
     
    <h1 className="bar">total Solved:{value[0].val}</h1>
     <h1 className="bar"> Solved in Contest:{value[1].val}</h1>
 <h1 className="bar"> Solved in Virtual Contest:{value[2].val}</h1>
 
     </div>
 
   )
   }else{
     return(
       <div>
       <h1 className="bar">{x.comment} </h1>
       </div>
     )
   }
}
    
}
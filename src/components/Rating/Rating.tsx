import React from 'react';

export function Rating(props:any) {
debugger
    console.log('Rating rendering')
   switch (props.value){
       case 0:
           return <div>
               <Star selected={false}/>
               <Star selected={false}/>
               <Star selected={false}/>
               <Star selected={false}/>
           </div>
       case 1:
        return (
               <div>
                   <Star selected={true}/>
                   <Star selected={false}/>
                   <Star selected={false}/>
                   <Star selected={false}/>
               </div>
           );
       break;
       case 2:
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={false}/>
                   <Star selected={false}/>
               </div>
           );
           break;
       case 3:
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={false}/>
               </div>
           );
           break;
       case 4:
           return (
               <div>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
                   <Star selected={true}/>
               </div>
           );
           break;
       default:
           return <div>
               <Star selected={true}/>
               <Star selected={true}/>
               <Star selected={true}/>
               <Star selected={true}/>
           </div>
   }

}

function Star(props: any) {

    console.log('Star rendering')
    if (props.selected)
        return <b><span> Star </span></b>
     else
        return <span> Star </span>

}
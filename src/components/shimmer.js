
const Shimmer = () => {
  return (
    <div className="container">
      {Array(15).fill().map((e,index)=> (<div key={index} className="shimmer-card"></div>))}
    </div>
  )
}

export const MenuShimmer = () => {
  return (
    <>
      <div className="name-shimmer"></div>
      <div className="container-shimmer">
        {Array(6).fill().map((e,index)=> {
          return (<div key= {index} className="menu-shimmer"></div>)
        })}
      </div>
    </>    
  )
}



export default Shimmer;


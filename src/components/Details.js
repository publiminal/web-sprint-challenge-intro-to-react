
const Details = props => { 



    return (
        <div className='container'>
          <h2>Details (of friend with id {/* friendId */}):</h2>
          {
            /* details */ false &&
            <>
              <p>{/* details.name */} is {/* details.age */}</p>
              <p>email is {/* details.email */}</p>
              {/* name */} likes:
              {/* <ul> */}
              {/*   {details.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)} */}
              {/* </ul> */}
            </>
          }
          <button >Close</button>
        </div>
      )
    

}



export default Details;
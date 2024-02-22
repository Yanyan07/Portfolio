

export default function MovieStack(props) {
  const closeTechShow = ()=>{
    props.onTechShow();
  }
  
  return (
    <div className="tech-container">
      <div>
        Java 1.8,&nbsp;&nbsp;&nbsp;&nbsp; Spring Boot 2.7.11,&nbsp;&nbsp;&nbsp;&nbsp; 
        RESTful API,&nbsp;&nbsp;&nbsp;&nbsp; Maven&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
        MySQL,&nbsp;&nbsp;&nbsp;&nbsp; JPA, &nbsp;&nbsp;&nbsp;&nbsp;
        JavaScript,&nbsp;&nbsp;&nbsp;&nbsp; React 18,&nbsp;&nbsp;&nbsp;&nbsp; 
        pubsub-js &nbsp;&nbsp;&nbsp;&nbsp;
      <div>
      </div>
      <div>
        axios,&nbsp;&nbsp;&nbsp;&nbsp; HTML 5,&nbsp;&nbsp;&nbsp;&nbsp; CSS,&nbsp;&nbsp;&nbsp;&nbsp; 
        Git,&nbsp;&nbsp;&nbsp;&nbsp; GitHub &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className='close' onClick={closeTechShow}>
        <img src={require('../../images/error.png')} alt='profile'/> 
      </div>
    </div>
  )
}


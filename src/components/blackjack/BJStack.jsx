import './BJStack.css';

export default function BJStack(props) {
  const closeTechShow = ()=>{
    props.onTechShow()
  }
  return (
    <div className="tech-container">
      <div>
        Java,&nbsp;&nbsp;&nbsp;&nbsp; Spring Boot,&nbsp;&nbsp;&nbsp;&nbsp; 
        RESTful API,&nbsp;&nbsp;&nbsp;&nbsp; Maven,&nbsp;&nbsp;&nbsp;&nbsp;
        Tomcat&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
        MySQL,&nbsp;&nbsp;&nbsp;&nbsp; JPA, &nbsp;&nbsp;&nbsp;&nbsp;
        Postman, &nbsp;&nbsp;&nbsp;&nbsp; Axios,&nbsp;&nbsp;&nbsp;&nbsp; 
        JavaScript&nbsp;&nbsp;&nbsp;&nbsp;   
      <div>
      </div>
      <div>
        React,&nbsp;&nbsp;&nbsp;&nbsp; HTML5,&nbsp;&nbsp;&nbsp;&nbsp; 
        CSS,&nbsp;&nbsp;&nbsp;&nbsp; Git,&nbsp;&nbsp;&nbsp;&nbsp; 
        GitHub &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className='close' onClick={closeTechShow}>
        <img src={require('../../images/error.png')} alt='profile'/> 
      </div>
    </div>
  )
}

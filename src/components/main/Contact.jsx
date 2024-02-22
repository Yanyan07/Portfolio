
export default function Contact() {
  return (
    <div className="contact">
      <div>Contact Me</div>
      <div className="detail clearfix">
        <a href="https://www.linkedin.com/in/anna-jiang-0572542b6/" target="_blank" rel="noreferrer">
          <img className="contact-img" src={require('../../images/linkedIn.png')} alt='pic'/>
          <div>https://www.linkedin.com/in/anna-jiang-0572542b6/</div>
        </a>
      </div>
      <div className="detail clearfix">
        <a href="https://github.com/Yanyan07" target="_blank" rel="noreferrer">
          <img className="contact-img" src={require('../../images/github.png')} alt='pic'/>
          <div>https://github.com/Yanyan07</div>   
        </a>
      </div>  
      <div className="detail clearfix">
        <a href="/" target="_self" rel="noreferrer">
          <img className="contact-img" src={require('../../images/email.png')} alt='pic'/>
          <div>yenj2015@gmail.com</div>   
        </a>
      </div>
    </div>
  )
}
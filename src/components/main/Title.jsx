
export default function Title() {
  return (
    <div className="title clearfix"> 
      <div className="info">
        <div>Hi, I'm Yanyan Jiang</div>
        <div>Software Engineer</div>
      </div>
      <img className="img" src={require('../../images/img.png')} alt='profile'/> 
    </div>
  )
}
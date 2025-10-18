const CourseCardsImage = (props) => {
    console.log(props)
  return (
    <>
        <div className="card">
          <img src={props.cardimage} alt="dev.jpeg" />
          <div className="card-content">
            <p>{props.cardContent}</p>
            <a href="#">{props.courseName}</a>
          </div>
        </div>
    </>
  )
}

export default CourseCardsImage
import { Col } from "react-bootstrap";

export const InternCard = ({ title, description, company }) => {
  return (
    <div className="proj-txtx">
        <h4 style={{color: '#fff'}}>{title}</h4>
        <p>{company}</p>
        <span>{description}</span>
    </div>
  )
}
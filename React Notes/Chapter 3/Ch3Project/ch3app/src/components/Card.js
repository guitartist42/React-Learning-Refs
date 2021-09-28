
import './Card.css';
//border radius and box shadow is what the Card is
//we use props children to pass this style between opening and
//closing tags i.e. <> {props.children} <> where props is in
//the opening tag i.e. <div className={props.something}

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;
function Button(props) {
  return (
    <div className="col-3 text-center">
      <button onClick={props.onClick} className={props.nameClass}>{props.label}</button>
    </div>
  );
}

export default Button;
function Button(props) {
    return (
      <div className="col-3 text-center">
        <button className={props.nameClass}>{props.label}</button>
      </div>
    );
  }

  export default Button;
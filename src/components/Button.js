import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  // const onClick = (e) => {
  //   //Get all kinds of info abt the button
  //   // console.log(e);
  // };

  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;

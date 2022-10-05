function OperatorButton({ handleClick, operator, name }) {
  return (
    <button name={name} onClick={handleClick} className="operator-btn">
      {operator}
    </button>
  );
}

export default OperatorButton;

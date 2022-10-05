function OperatorButton({ handleClick, operator }) {
  return (
    <button className="operator-btn" onClick={() => handleClick(operator)}>
      {operator}
    </button>
  );
}

export default OperatorButton;

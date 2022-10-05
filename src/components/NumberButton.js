function NumberButton({ handleClick, number, name }) {
  return (
    <button name={name} onClick={handleClick} className="number-btn">
      {number}
    </button>
  );
}

export default NumberButton;

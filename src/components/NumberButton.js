function NumberButton({ handleClick, number }) {
  return (
    <button className="number-btn" onClick={() => handleClick(number)}>
      {number}
    </button>
  );
}

export default NumberButton;

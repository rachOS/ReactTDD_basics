const Button = ({ className, label, handleClick, isDisabled }: any) => {
  return (
    <button className={className} onClick={handleClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;

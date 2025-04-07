// components/Button.tsx
type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} className="btn">
    {label}
  </button>
);

export default Button;

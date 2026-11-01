import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
  ...props
}) {
  const className = `button button-${variant}`;

  return to ? (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
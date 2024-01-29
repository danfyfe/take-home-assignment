const P = ({ className, children }) => (
  <p
    className={`
      ${className ? className : ''}
      text-blue-primary
    `}
  >
    {children}
  </p>
);

export default P;

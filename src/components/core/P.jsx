const P = ({ className, children }) => (
  <p
    className={`
      ${className ? className : ''}
    `}
  >
    {children}
  </p>
);

export default P;

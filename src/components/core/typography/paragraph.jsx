const P = ({ className, children }) => (
  <p
    className={`
      ${className ? className : ''}
      text-blue-primary text-left text-sm
    `}
  >
    {children}
  </p>
);

export default P;

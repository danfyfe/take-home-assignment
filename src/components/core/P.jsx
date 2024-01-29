const P = ({ className, children }) => (
  <p
    className={`
      ${className ? className : ''}
      text-blue-primary text-center
    `}
  >
    {children}
  </p>
);

export default P;

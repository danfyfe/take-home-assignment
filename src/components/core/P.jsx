const P = ({ className, children }) => (
  <p
    className={`
      ${className ? className : ''}
      text-blue-primary text-center text-sm
    `}
  >
    {children}
  </p>
);

export default P;

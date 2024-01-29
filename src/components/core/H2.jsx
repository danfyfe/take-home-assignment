const H2 = ({ className, children }) => (
  <h2
    className={`
      ${className ? className : ''}
    `}
  >
    {children}
  </h2>
);

export default H2;

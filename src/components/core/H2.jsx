const H2 = ({ className, children }) => (
  <h2
    className={`
      ${className ? className : ''}
      text-4xl font-bold text-center
    `}
  >
    {children}
  </h2>
);

export default H2;

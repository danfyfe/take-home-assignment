const Container = ({ className, children }) => (
  <div
    className={`
      ${className ? className : ''}
      w-full
    `}
  >
    {children}
  </div>
);

export default Container;

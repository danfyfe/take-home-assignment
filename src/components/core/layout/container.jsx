const Container = ({ className, children }) => (
  <div
    className={`${className ? className : ''}`}
  >
    {children}
  </div>
);

export default Container;

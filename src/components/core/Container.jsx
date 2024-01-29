const Container = ({ className, children }) => (
  <section
    className={`
      ${className ? className : ''}
      max-w-6xl w-[calc(100%-2rem)]
      bg-white
    `}
  >
    {children}
  </section>
);

export default Container;

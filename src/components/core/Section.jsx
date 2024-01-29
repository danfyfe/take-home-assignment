const Section = ({ className, children }) => (
  <section
    className={`
      ${className ? className : ''}
      max-w-4xl w-[calc(100%-2rem)]
      bg-white rounded-3xl p-2
    `}
  >
    {children}
  </section>
);

export default Section;

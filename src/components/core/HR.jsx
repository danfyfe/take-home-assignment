const HR = ({ className }) => (
  <hr
    className={`
      ${className ? className : ''}
    `}
  />
);

export default HR;

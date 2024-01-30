const HR = ({ className }) => (
  <hr
    className={`
      ${className ? className : ''}
       border-gray-primary border-1
        mt-3
    `}
  />
);

export default HR;

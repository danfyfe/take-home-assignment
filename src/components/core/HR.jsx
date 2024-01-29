const HR = ({ className }) => (
  <hr
    className={`
      ${className ? className : ''}
       border-gray-primary border-1
        w-full mt-3
    `}
  />
);

export default HR;

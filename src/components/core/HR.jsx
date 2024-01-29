const HR = ({ className }) => (
  <hr
    className={`
      ${className ? className : ''}
       border-gray-primary border-1
        w-full mt-4
    `}
  />
);

export default HR;

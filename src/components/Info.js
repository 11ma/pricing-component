const Info = ({ src, alt, text }) => {
  return (
    <li>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </li>
  );
};

export default Info;

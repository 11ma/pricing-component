const Info = ({ src, alt, text }) => {
  return (
    <ul>
      <li>
        <img src={src} alt={alt} />
        <p>{text}</p>
      </li>
    </ul>
  );
};

export default Info;

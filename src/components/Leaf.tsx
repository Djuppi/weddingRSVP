
const randomN = () => {
  return Math.random() * 100;
};

const Leaf = () => {
  return (
    <div className="branch">
      {[1, 2, 3].map((leaf) => {
        return (
          <div
            className={`leaf leaf${leaf}`}
            style={{
              background: `radial-gradient(circle at ${randomN()}%, #85a796, #dcf7e2)`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Leaf;

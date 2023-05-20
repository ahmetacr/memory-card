import "../styles/Header.css";
const Header = (props) => {
  return (
    <>
      <div className="header">
        <h1>Memory Cards</h1>
        <div className="scoreBoard">
          <h2>Score: {props.score}</h2>
          <h2>Best Score: {props.bestScore}</h2>
        </div>
      </div>
    </>
  );
};
export default Header;

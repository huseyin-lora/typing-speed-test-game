import Caret from "./Caret";

const UserTypings = ({
  userInput,
  className,
}: {
  className?: string;
  userInput: string;
}) => {
  const typedCharacters = userInput.split("");

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
      k
      <Caret />
    </div>
  );
};

const Character = ({ char }: { char: string }) => {
  return <span className="text-primary-400">{char}</span>;
};
export default UserTypings;

import "./Noresult.css";

interface NoresultProps {
    message : String
}

const Noresult: React.FC<NoresultProps> = ({message}) => {
  return (
    <div className="NoresultWrapper">
          <p>{ message}</p>
    </div>
  );
};

export default Noresult;

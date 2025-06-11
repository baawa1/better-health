import { useParams } from "react-router";

const Treatment = () => {
  const { treatmentId } = useParams<{ treatmentId: string }>();

  return <div>{treatmentId}</div>;
};
export default Treatment;

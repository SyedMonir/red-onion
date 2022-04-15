import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className=" absolute top-2/4 left-2/4">
      <ScaleLoader size={80} color={'#f74c70'} />
    </div>
  );
};

export default Spinner;

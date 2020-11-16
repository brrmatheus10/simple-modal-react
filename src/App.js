import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';
const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default App;

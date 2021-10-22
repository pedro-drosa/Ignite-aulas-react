import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsContext } from './TransactionsContext';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal = { handleOpenNewTransactionModal }/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;

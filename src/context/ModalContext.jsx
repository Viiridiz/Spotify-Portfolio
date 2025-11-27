import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal: () => setIsModalOpen(true), closeModal: () => setIsModalOpen(false) }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
import React from "react";
import { Modal } from "antd";
import ModalHeader from "./header/ModalHeader";
import Draggable from "react-draggable";

interface ICommonModalProps {
  contents: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommonModal = (props: ICommonModalProps) => {
  const { contents, open, setOpen } = props;
  const { title, component } = contents.current;
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title={<ModalHeader title={title} setOpen={setOpen} />}
      modalRender={(modal) => <Draggable children={modal} />}
      open={open}
      onCancel={handleCancel}
      closable={false}
      width={1000}
      footer={null}
    >
      {component}
    </Modal>
  );
};

export default CommonModal;

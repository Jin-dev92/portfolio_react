import { Button, Space } from "antd";
import React from "react";

const RedirectNotificationButton = ({ api, nKey, setIsOpen, href }) => {
  const confirmButtonHandler = async () => {
    api.destroy(nKey);
    setIsOpen(false);
  };
  const cancelButtonHandler = () => {
    api.destroy();
    setIsOpen(false);
  };
  return (
    <Space>
      <Button type="link" size="small" onClick={cancelButtonHandler}>
        취소
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={() =>
          confirmButtonHandler().then(() => (window.location.href = href))
        }
      >
        이동
      </Button>
    </Space>
  );
};
export default RedirectNotificationButton;

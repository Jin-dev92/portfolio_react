import {Button, Space} from "antd";
import React from "react";
const RedirectNotificationButton = ({api, nKey, setIsOpen, callback}) => {
    const confirmButtonHandler = async () => {
        api.destroy(nKey)
        setIsOpen(false)
    }
    return (
        <Space>
            <Button type="link" size="small" onClick={() => api.destroy()}>
                취소
            </Button>
            <Button type="primary" size="small" onClick={() => confirmButtonHandler().then(() => callback())}>
                이동
            </Button>
        </Space>
    )
}
export default RedirectNotificationButton
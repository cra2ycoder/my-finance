import React from 'react'
import NotificationList from '@components/NotificationList'
import { notificationList } from '@model/config'

function Notifications() {
  return <NotificationList list={notificationList} />
}

export default Notifications

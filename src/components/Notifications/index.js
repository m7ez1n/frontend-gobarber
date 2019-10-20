import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Você tem um novo agendamento</p>
            <time>Há 4 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento</p>
            <time>Há 4 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você tem um novo agendamento</p>
            <time>Há 4 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

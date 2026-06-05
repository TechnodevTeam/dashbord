"use client";

import { Admin, Resource } from "react-admin";
import dataProvider from "@/providers/dataProvider";
import authProvider from "@/providers/authProvider";
import { EventList, EventCreate, EventEdit } from "@/components/events";
import { SessionList, SessionCreate, SessionEdit } from "@/components/sessions";
import { RoomList, RoomCreate, RoomEdit } from "@/components/rooms";
import { SpeakerList, SpeakerCreate, SpeakerEdit } from "@/components/speakers";

export default function AdminPanel() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      requireAuth
    >
      <Resource
        name="events"
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
      />
      <Resource
        name="sessions"
        list={SessionList}     
        create={SessionCreate}
        edit={SessionEdit}
      />
      <Resource
        name="rooms"
        list={RoomList}
        create={RoomCreate}
        edit={RoomEdit}
      />
      <Resource
        name="speakers"
        list={SpeakerList}
        create={SpeakerCreate}
        edit={SpeakerEdit}
      />
    </Admin>
  );
}
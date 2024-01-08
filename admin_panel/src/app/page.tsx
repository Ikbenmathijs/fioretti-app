'use client';

import LogoutButton from "@/components/logoutButton";
import EventsList from "@/components/eventsList";
import GreenButton from "@/components/greenButton";


export default function Home() {


  function createNewEvent() { 

  }

  return (
    <div>
      <div>
        <LogoutButton />
        <GreenButton text="Create New Event" href={"CreateEvent"} />
      </div>
      



      <EventsList />
    </div>
  )
}

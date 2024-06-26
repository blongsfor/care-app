import useSWR from "swr";
import React from "react";
import ClientList from "../components/ClientList";
import LogoutButton from "../components/LogoutButton";

export default function Homepage() {
  const { data, error } = useSWR("/api/clients");

  if (error) return <div>Failed to load clients</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);

  return (
    <div>
      <LogoutButton />
      <h2>Client List</h2>
      <ClientList clients={data} />
    </div>
  );
}

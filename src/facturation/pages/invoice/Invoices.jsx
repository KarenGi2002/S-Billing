import { NavLink, useParams } from 'react-router-dom';

export const Invoices = () => {
  const { client_id } = useParams();
  return (
    <>
      <h1>Client: {client_id}</h1>
      <p>/invoices</p>
      <NavLink to={`/invoices/10`}>Invoice</NavLink>
    </>
  );
};

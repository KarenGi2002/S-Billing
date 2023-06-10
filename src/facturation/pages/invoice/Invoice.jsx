import { useParams } from 'react-router-dom';

export const Invoice = () => {
  const { client_id, invoice_id } = useParams();
  return (
    <>
      <h1>
        Invoice: {invoice_id}, Client: {client_id}
      </h1>
      <p>/invoices/:invoice_id</p>
    </>
  );
};

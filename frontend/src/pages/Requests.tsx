function Requests() {
  const requests = [
    {
      id: 1,
      book: "The Alchemist",
      user: "Bob",
    },
  ];

  return (
    <div>
      <h1>Swap Requests</h1>

      {requests.map((request) => (
        <div key={request.id}>
          <h3>{request.book}</h3>
          <p>Requested by: {request.user}</p>

          <button>Accept</button>
          <button>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default Requests;

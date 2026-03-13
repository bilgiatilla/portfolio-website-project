import { useEffect, useState } from "react";
import axios from "axios";

function RemoteUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data.slice(0, 3));
      })
      .catch((err) => {
        console.error("API verisi alınamadı:", err);
        setError("Veriler alınamadı.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section data-cy="api-demo" className="px-6 py-12 md:px-12 lg:px-24 text-center text-[#4731D3] dark:text-[#ffbc42]">
      <h2 className="text-2xl font-bold mb-6">API Demo</h2>

      {loading && <p>Yükleniyor...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4 md:grid-cols-3">
          {users.map((user) => (
            <div key={user.id} className="rounded-xl border p-4">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm">{user.email}</p>
              <p className="text-sm">{user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RemoteUsers;

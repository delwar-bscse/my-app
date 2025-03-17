import React, { useEffect, useState } from 'react';

export default function User() {
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/profile/api', { cache: 'no-store' });
      const result = await res.json();
      setData(result);
    })();
  }, []);

  return (
    <div>
      User Name : {data.name}
    </div>
  );
}
// app/components/ServerComponent.js

export default async function ServerComponent() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json());
  
    return (
      <div>
        <h2>Server Component Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  
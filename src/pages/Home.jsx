import { useState } from 'preact/hooks';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Welcome to my portfolio!</h2>
      <p>This is a simple demo of Preact with routing and layouts.</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>

      <div style={{ marginTop: '1rem' }}>
        <h3>About Me</h3>
        <p>
          I'm <strong>low_kb</strong>, a passionate programmer specializing in JavaScript, TypeScript, Java, and C#.
          I follow best practices like DRY and SOLID to build clean, maintainable, and scalable code.
        </p>
      </div>
    </section>
  );
}

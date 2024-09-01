import React, { useState } from 'react';

// Header Component
const Header = () => <h1 style={styles.header}>My Awesome App</h1>;

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={styles.section}>
      <p style={styles.text}>Current Count: {count}</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

// List Component
const List = () => {
  const [items, setItems] = useState(['First Item', 'Second Item', 'Third Item']);
  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={index} style={styles.listItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

// Parent and Child Components
const Parent = () => {
  const [data, setData] = useState('Hello from Parent!');
  return (
    <div style={styles.section}>
      <Child data={data} />
      <button style={styles.button} onClick={() => setData('Updated data from Parent!')}>
        Update Child
      </button>
    </div>
  );
};

const Child = ({ data }) => <p style={styles.text}>{data}</p>;

// Main App Component
const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <Counter />
      <List />
      <Parent />
    </div>
  );
};

// Inline Styles
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  header: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: '16px',
    color: '#555',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  list: {
    padding: '0',
    listStyle: 'none',
    marginBottom: '20px',
  },
  listItem: {
    padding: '5px 0',
    color: '#333',
  },
};

export default App;
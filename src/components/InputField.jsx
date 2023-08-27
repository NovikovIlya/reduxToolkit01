const InputField = ({ text, setText, addTask }) => {
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add toto</button>
    </div>
  );
};

export default InputField;

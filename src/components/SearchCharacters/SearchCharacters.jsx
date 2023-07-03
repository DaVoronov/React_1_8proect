function SearchCharacters({ value, onChange, placeholder, isTextArea }) {
  return (
    <div>
      {isTextArea ? (
        <textarea placeholder={placeholder} value={value} onChange={onChange} />
      ) : (
        <input placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </div>
  );
}

export default SearchCharacters;

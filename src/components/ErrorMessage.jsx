function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <h3> Country Not Found</h3>
      <p>{message}</p>
      <p>Try searching for: India, USA, Japan, France, Germany</p>
    </div>
  );
}

export default ErrorMessage;

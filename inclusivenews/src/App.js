import NewsContainer from "./components/NewsContainer";

function App() {
  return (
    <div className='App'>
      <SearchForm
            value={search}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
      />
      <NewsContainer  />
    </div>
  );
}

export default App;

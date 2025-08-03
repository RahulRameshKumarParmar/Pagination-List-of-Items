import logo from './logo.svg';
import './App.css';
import { list } from './Data/list';
import { useState } from 'react';

function App() {

  let [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 5;
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let totalPages = Math.ceil(list.length / itemsPerPage);
  return (
    <div className="App">
      <div>
        <h1>Pagination for a List of Items</h1>
        <p>Create a paginated list that displays a fixed number of items per page. Include "Next" and "Previous" buttons to navigate between pages. Track the current page in state and update the displayed items accordingly.</p>
      </div>
      <div>
        {list.slice(startIndex, endIndex).map((value, index) => {
          
          return (
            <div key={index}>
              { 
                <div>{value.item} {value.title}</div> 
              }
            </div>
          )
        })}
        <div>
          <button onClick={() => {
            if(currentPage > 1){
              setCurrentPage(currentPage - 1)
            }
          }}>Prev</button>
          <button onClick={() => {
            if(currentPage < totalPages){
              setCurrentPage(currentPage + 1)
            }
          }}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [filterData, setFilterData] = useState([]);
  const [wholeData, setWholeData] = useState([]);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [empty, setEmpty] = useState({});
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const stockData = [];
      const response = await axios.get('https://zerodha-backend-stock.herokuapp.com/stock_details/');
      const data = JSON.parse(response.data); 
      data.data.map(ele => stockData.push(JSON.parse(ele)));
      setFilterData(stockData);
      setWholeData(stockData);
      setLoader(false)
      setDate(data.date);
      setEmpty()
    }
    fetchData()
  }, [empty])

  useEffect(() => {
    console.log(search)
    const filterData = wholeData.filter(ele => ele.name.toLowerCase() === search);
    console.log(filterData);
    setFilterData(filterData);
    if(search.length === 0) {
      setLoader(true);
      setEmpty({})
    }
  }, [search])

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <div className="header">
        EQUITY {date}
      </div>

      <div className="equity-input">
        <span>Search By Name: </span> <input type='text' name='search' onChange={handleChange} value={search} />
      </div>

      {
        isLoading ? (<h1>wait it is loading .......</h1>) : 
        (
          <div className="equity-table">
          <table align="center">
            <thead>
              <tr>
                <th>code</th>
                <th>name</th>
                <th>open</th>
                <th>close</th>
                <th>high</th>
                <th>low</th>
              </tr>
            </thead>
            <tbody>
              {
                filterData.map(ele => (
                  <tr key={ele.code}>
                    <td>
                      {ele.code}
                    </td>
                    <td>
                      {ele.name}
                    </td>
                    <td>
                      {ele.open}
                    </td>
                    <td>
                      {ele.close}
                    </td>
                    <td>
                      {ele.high}
                    </td>
                    <td>
                      {ele.low}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        )
      }
    </div>
  );
}

export default App;

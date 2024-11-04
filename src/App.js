// import logo from './image/logo1.png';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import Dashboard from './View/Dashboard';
import Router_app from './Routing/Router_app';

function App() {
//   const fetchInfo = async () => {
//     try {
//         setLoading(true)
//         var formdata = new FormData();
//         formdata.append("request_type", api_type);
//         const data = await CallApi_Without_Token('POST', API.SERVICE_DETAILS, formdata)
//         setLoading(false)
//         if (data.status === 1) {
//             setDetailsData(data)
//             setLoading(false)
//         } else {
//             setLoading(true);
//             setTimeout(() => { navigate("/"); }, 5000);
//         }
//     }
//     catch (e) {
//         setLoading(true);
//         setTimeout(() => { navigate("/"); }, 5000);
//     }
// }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       return  <Router_app />


  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>




    </div>
   
  );
}

export default App;

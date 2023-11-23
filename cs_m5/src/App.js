import Layout from './components/Home';
import CreateContract from './components/contracts/CreateContract';
import ContractList from './components/contracts/ContractList';
import AddCustomer from './components/customers/AddCustomer'
import CustomerList from './components/customers/CustomerList'
import UpdateCustomer from './components/customers/UpdateCustomer'
import UpdateService from './components/services/UpdateService';
import ServiceList from './components/services/ServiceList';
import AddService from './components/services/AddService';
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}></Route>
      <Route path='create-contract' element={<CreateContract/>}></Route>
      <Route path='contract-list' element={<ContractList/>}></Route>
      <Route path='add-customer' element={<AddCustomer/>}></Route>
      <Route path='customer-list' element={<CustomerList/>}></Route>
      <Route path='update-customer' element={<UpdateCustomer/>}></Route>
      <Route path='update-service' element={<UpdateService/>}></Route>
      <Route path='service-list' element={<ServiceList/>}></Route>
      <Route path='add-service' element={<AddService/>}></Route>
    </Routes>
    </>
  );
}

export default App;

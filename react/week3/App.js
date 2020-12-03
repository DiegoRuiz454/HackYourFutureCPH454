import React from 'react';
import List from './components/List.js'
import FormInput from './components/FormInput.js'
import Footer from './components/Footer.js'
import WatchCount from './components/WatchCount.js'
import {DataProvider} from './components/DataProvider.js'






function App() {
  return (
    <DataProvider>
    <div class="App">
    <h1> Todo List </h1>
    <h1> HackYouFuture</h1>
    <WatchCount />
    <FormInput />
    <List />
    <Footer />
    </div>
   </DataProvider>
   
  );
}

export default  App;





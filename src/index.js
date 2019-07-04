import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import ScrollToTop from './common/util/ScrollToTop'; 
import ReduxToastr from 'react-redux-toastr';  
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

store.firebaseAuthIsReady.then(() => {



ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <ReduxToastr position="bottom-right" transitionIn="fadeIn" transitionOut="fadeOut" />
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

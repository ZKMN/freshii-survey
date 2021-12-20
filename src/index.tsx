import React from 'react';
import ReactDOM from 'react-dom';

import { SurveyContainer } from './SurveyContainer';

import 'styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <SurveyContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

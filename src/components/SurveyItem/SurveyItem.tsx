import { Navigation } from 'components';

export const SurveyItem: React.FC = ({ children }) => (
  <div>
    {children}

    <Navigation />
  </div>
);
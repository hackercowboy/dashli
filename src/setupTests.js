import { configure as configureEnzymeAtapter } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configureEnzymeAtapter({ adapter: new EnzymeAdapter() });

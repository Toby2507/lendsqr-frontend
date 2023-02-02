import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from "../Pages/Dashboard";

Enzyme.configure({ adapter: new Adapter() });
describe("Dashboard Component Test", () => {
  test("should render without error", () => {
    const dashboard = shallow(<Dashboard />);
    expect(toJson(dashboard)).toMatchSnapshot();
  });
});
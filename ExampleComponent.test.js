import React from 'react';
import renderer from 'react-test-renderer';

import ExampleComponent from './ExampleComponent';

describe('<ExampleComponent />', () => {
  it('handles props correctly', () => {
    const testComponent  = renderer.create(<ExampleComponent testID="ex" arg={4} />)
    expect(testComponent.root.props.arg).toBe(4)
    expect(testComponent.toJSON()).toMatchSnapshot()
  });
});


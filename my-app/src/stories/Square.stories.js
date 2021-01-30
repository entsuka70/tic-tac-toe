import React from 'react';

import {Square} from './Square';

export default  {
    title: 'Square',
    component: Square,
};

const Template = (args) => <Square {...args} />;

export const circle = Template.bind({});
circle.args = {
    className: 'square',
    label:'○',
};
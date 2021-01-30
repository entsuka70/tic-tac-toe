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

export const cross = Template.bind({});
cross.args = {
    square: 'square',
    label: 'X',
}

export const triangle = Template.bind({});
triangle.args = {
    square: 'square',
    label: '△',
}
import React from 'react';

import {Board} from './Board';

export default {
    title: 'Board',
    component: Board,
};

const Template = (args) => <Board {...args} />;

export const filledSomething = Template.bind({});
filledSomething.args = {
    classBoard: 'board-row',
    classSquare: 'square',
    value: '',
};
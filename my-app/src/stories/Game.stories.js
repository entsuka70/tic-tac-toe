import React from 'react';

import {Game} from './Game';

export default {
    title: 'Game',
    component: Game,
}

const Template = (args) => <Game {...args} />;

export const gaming = Template.bind({});
gaming.args = {
    values:'',
};
// Storyshots.test.js

import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot, puppeteerTest} from '@storybook/addon-storyshots-puppeteer';

initStoryshots(); // スナップショットテスト
// initStoryshots({suite:'Image storyshots', test: imageSnapshot()}); // ビジュアル・リグレッションテスト
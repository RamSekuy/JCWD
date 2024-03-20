import QueueExecuter from './queueClass.js';

const queue1 = new QueueExecuter();
queue1.addOrder("ABC");
queue1.addOrder("DEF");
queue1.addOrder("GHI");
queue1.process();
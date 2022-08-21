---
title: backtester
description: Backtest algorithmic trading strategies.
status: completed
github: https://github.com/tareqalyousef/Backtester
---

## Background
---
The instant I discovered algorithmic trading, I knew I would need a tool to measure the performance of various trading strategies. I decided to design my own backtester-- one that would allow me to quickly test parameterized algorithms over years of historical data and thousands of tickers.

## Project
---
So I created a backtesting application in C++. It runs entirely on the command line, and the tedious computations are done on multiple threads to maximize efficiency. I used data from [Alpha Vantage](https://www.alphavantage.co/) and used [Doxygen](https://github.com/doxygen/doxygen) for documentation.

Considering the difficulty of obtaining historical data, the application has been designed with limitations:
- The only market data available comes from the equities market
- All data comes in daily tradebars (open, high, low, close, volume, timestamp)
- Assets come from only a few US exchanges
- The backtester does not take into account fees or slippage

The backtester allows you to customize any strategy-- you can modify the initial equity, start date, end date, and other parameters. You can open/close limit/market orders that short/long any ticker for any duration. 

To begin, simply create a class that inherits from `Strategy`:

```c++
class ExampleStrategy : public Strategy {
    public:
        ExampleStrategy();
        void onInitialize();
        void onDay();
        void onOrderFilled(const shared_ptr<Order>& order, const shared_ptr<Position>& position, double price, int shares);
};
```

Once you have created your class, add it to the driver in `driver.cpp`:


```c++
Driver::Driver() {
    strategies.push_back(make_shared<ExampleStrategy>());
}
```

All boilerplate is defined in `Strategy`-- here, you can pull market data, create orders, view positions, and much more.

For more detailed instruction, view the [repository](https://github.com/tareqalyousef/Backtester).
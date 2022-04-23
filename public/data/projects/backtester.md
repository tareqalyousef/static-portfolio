---
title: backtester
description: Backtest algorithmic trading strategies.
status: completed
github: https://github.com/tareqalyousef/backtester
---

## Background
---
The instant I discovered algorithmic trading, I knew I would need a tool to measure how successful or unsuccessful various trading strategies might be. Initially, I forward tested my strategies by paper trading with [Alpaca](https://alpaca.markets/) using [Polygon](https://polygon.io/) for data.

Quickly, this became a problem. Forward testing trading strategies is highly inefficient as a long timeframe is needed for confirming strengths of strategies, and it does not allow for an easy means to parameterize strategies for optimization--each variant would need its own long and tedious forward test. I decided to design my own backtester. I needed a tool that would allow me to quickly test parameterized algorithms over years of historical data and thousands of tickers.

## Project
---
So I created the backtester--I pulled data from [Alpha Vantage](https://www.alphavantage.co/), used [ScottPlot](https://github.com/ScottPlot/ScottPlot) for data visualization, and designed the UI framework with [WPF](https://github.com/dotnet/wpf).

It contains limit orders, market orders, OHLC data, an indicator library, data visualization, and reports for each strategy. The backtester is extremely simple and modular. To create a strategy, simply inherit `IStrategy`:

```cs
public class ExampleStrategy : IStrategy
{
    public void Update(Account account)
    {
        // Daily tick
    }
}
```

The `Update(Account account)` method is called every "day" and contains a reference to an account which contains data you would expect your broker's portfolio to have.

Since the strategy is a class, a constructor can be made that contains any parameter a trading strategy might need. This way, it is very easy to backtest dozens of variants of a trading strategy without needing to rewrite anything.

When running the strategy, two plots will be updated--one containing the account's equity, and the other containing the account's buying power. In addition to these plots is performance data. It contains detailed technicals about the performance of the strategy.
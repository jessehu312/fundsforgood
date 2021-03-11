## Inspiration
With meme stocks taking over social media recently, many millenials have jumped into the world of finance without having much-investing experience. Millennials, as they care about making an impact, also want to know how they can invest sustainably. But as first-timers, they don’t know where to start and which company they should invest in.

## What it does
Introducing **Funds for Good**, a platform that allows millennials to easily find and invest in companies based on the issue they care about. We aggregate real-time stock data along with articles about the impacts a company has on the world to determine the metrics score based on their preference. So you can easily invest in companies that align with the causes you most care about, without sacrificing your
performance goals.

![alt text](https://i.imgur.com/CPwk67X.jpg)
![alt text](https://i.imgur.com/6dkeO2P.png)

## Features
- Dynamically updated chart with the latest stock data
- All the latest market data and ESG stats for the S&P500
- Set your ESG preference on your profile
- Pull articles for the company based on your ESG preference
- Search for stocks across the market

### ESG Dimensions
- Environmental impact
- Labor Practices
- Social impact
- Gender equality
- Pay equality
- Corporate activity impact
- Public welfare score
- Long term profitability
- Short term profitability

### How we built it
- Nextjs/React = FE
- Serverless functions w/ Next = Part of the backend (firebase admin sdk)
- TailwindCSS = Styling
- Figma = Prototypes/Mockups/Designs
- Firebase Auth = Authentication and Authorization (if we do a group buy)
- Firebase Firestore and Datastax = Central Database
- Flask Backend = Central Backend
- Selenium = Web Scraping
- Yarn
- Alpaca for Market data, not alpha vantage or polygon.io
- Refinitiv and RapidAPI for ESG data
- newsapi.org

## Challenges we ran into
- Alphavantage rate-limiting so had to use alpaca
- Polygon.io free API is only limit to 5
- SearchAPI is only on alpha vantage
- New to NextJS
- News API Rate limiting

## Accomplishments that we're proud of
Best project we've got so far in a hackathon.

## What we learned
Learned a lot of new tech stacks

## What's next for Funds for Good
Adding a trading function, more impact categories, and links to government entities that regulate environment data.

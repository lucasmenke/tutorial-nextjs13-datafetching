## Data Fetching in Next.js 13 

In this project I integrated 3 different ways of data fetching.

Finished: 04.02.23

<br>

## 1. StaticProps (app/staticprops)

It is similar to the old getStaticProps function. 
The page will be pre-rendered at build time on the server.

<br>

## 2. Server Side (app/server)

The page will be pre-rendered on each request.
The code is almost identical to the "StaticProps" code. The only difference is that the fetched data will not be cached.

<br>

## 3. Client Side (app/client)

When client sided fetching is needed it is recommended to use hird-party library such as SWR.
Wrapping fetch in use is currently not recommended in Client Components and may trigger multiple re-renders.
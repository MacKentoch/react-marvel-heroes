React Marvel Heroes
==========

## Preview

![preview image](https://cdn.rawgit.com/MacKentoch/react-marvel-heroes/master/sreens/preview-lighter.gif)

## Detailed Content

**front:**
- React JS (15.4.x - [github :link:](https://github.com/facebook/react))
- Redux (*best flux pattern implementation: single store, time travel in your store, ...*)
 - *NOTE: I use `redux ducks convention` (= modules instead of separate actions and reducers files)*
- React-Redux
- Redux-devtools (*want to time travel your application State? It is possible = AWESOME productivity and dev experience*)
- React-Router-Redux (*previously named react-simple-router*)
- react-router (3.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- axios ([github :link:](https://github.com/mzabriskie/axios))

**Tool chain:**

- babel 6+
- eslint
- hot reload V3 (*Dan Abramov seems to say that hot relaod v1 is deprecated so I jumped into v3 since React v15.4*)
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats
- autoprefixer (css and sass)

## Usage

> IMPORTANT: `ensure` to have `NodeJS 6.x at minimum!`.

### clone this repository

```bash
git clone https://github.com/MacKentoch/react-marvel-heroes.git
```


### Install dependencies

```bash
npm install
```

*or:*

```bash
yarn install
```

### Running demo (*just a prod-like with webpack-dev-server*)

*General case:*
```bash
npm run demo
```

*Windows - particular - case:*
```bash
npm run demo-win
```

> Then open your navigator and go to this url: `http://localhost:8080/webpack-dev-server/`

### bundle dev mode (*+ redux-devtools*)

*General case:*
```bash
npm run dev
```

*Windows - particular - case:*
```bash
npm run dev-win
```

##### Note : redux-devtools shortcuts
- `ctrl+h`: to toggle devtools panel
- `ctrl+q`: to change devtools panel position (*by default: on the right*)

### dev : hot reload mode (*+ redux-devtools*)

*General case:*

```bash
npm run start
```

*Windows - particular - case:*
```bash
npm run start-win
```

##### Note : redux-devtools shortcuts
- `ctrl+h`: to toggle devtools panel
- `ctrl+q`: to change devtools panel position (*by default: on the right*)


### bundle production mode

*General case:*
```bash
npm run prod
```

*Windows - particular - case:*
```bash
npm run prod-win
```

## License

The MIT License (MIT)

Copyright (c) 2016 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

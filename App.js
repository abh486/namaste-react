const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:"child"},[
        React.createElement("h1",{},"yoyo"),
        React.createElement('h2',{},"yoyoyoyo")
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
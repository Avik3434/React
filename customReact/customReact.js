function customRender(elemtent, container){
    // Manually
    /*
    const domElement = document.createElement(elemtent.type)
    domElement.innerHTML = elemtent.children
    domElement.setAttribute('href', elemtent.props.href)
    domElement.setAttribute('target', elemtent.props.target)

    container.appendChild(domElement)
    */

    // Automation
    const domElement = document.createElement(elemtent.type)
    domElement.innerHTML = elemtent.children

    // loop for n number of props 
    for (const prop in elemtent.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop, elemtent.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "Click me to visit Google"
}

const mainRoot = document.getElementById('root')

customRender(reactElement, mainRoot)
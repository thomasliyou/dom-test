window.dom = {
    find(selector, scope) {
        return scope || document.querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'border','1px solid red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'border')
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(div,{border:'1px solid red',color:'blue'})
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn(nodeList[i])
        }
    },
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
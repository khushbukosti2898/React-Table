import React from 'react'
class NumberFormat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            finalVal: '',
            passdata: ''

        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value,
            passdata:value
        },
            () => this.checkEx(name, value))
        /* let value1 = value.split('-').join('');
        let finalVal = value1.match(/.{1,3}/g).join('-');
        console.log("result  " + finalVal)
        this.setState({ finalVal: finalVal }) */
    }
    checkEx = (name, value) => {
        let arr = value.split("").filter((a) => { return /[0-9]/.test(a) });
        console.log("arr " + arr)
        let a = [],b=[]
        arr.map((res, i) => {
            b.push(res)
            if (i === 6) {
                a.push("-" + res)
            } else if (i === 3) {
                a[0] = "(" + a.join("")
                a.splice(1, 2)
                // a.pop(i-1)
                // a.pop(i-2)
                a.push(") " + res)
            }
            else {
                a.push(res)
            }
        })
        console.log(a)
        this.setState({ finalVal: a.join(""),
    passdata: b.join("")})

    }

    render() {
        return (<>
            <input type="text" name="data" maxLength="14" value={this.state.finalVal} onChange={this.handleChange}
               /*  onBlur={this.handleChange} */ />
        </>)
    }
}

export default NumberFormat;
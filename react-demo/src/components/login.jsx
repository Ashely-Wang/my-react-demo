import  React from 'react'
const dq = (url) => {
    return new Promise((reso, rej) => {
        fetch(url).then(res => {
            reso(res.json())
        })
    })
}
class A extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            data: {}
        }
    }
    login = () => {
        fetch("http://127.0.0.1:3100/wawa", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data)
            this.setState({
                data: data
            })
            this.props.history.push("/main")
        })

    }
    getUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return <div className="container" id="login">
            <form className="form-signin">
            <img className="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.getUsername} required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.getPassword} required />
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.login} type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form>
        </div>
    }
}
export default A
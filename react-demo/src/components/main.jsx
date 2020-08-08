import React from 'react'
import '../assests/css/main.css'
import '../assests/css/pubuliu.css'
 class Main extends React.PureComponent {
     constructor() {
         super()
         this.state = {
            style1: {width: "18rem", float: "left", margin: "8px"}
         }
     }
     render() {
         return <div className="container" id="middle">
             <section className="jumbotron text-center">
                <div className="container">
                <h1>Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                    <a href="#" id="fb" className="btn btn-primary my-2">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
                </div>
            </section>
            <div className="album py-5 bg-light" id="gg">
                <div className="container" id="xiao">
                <div className="card" style={this.state.style1}>
                <img src="https://img.crawler.qq.com/lolwebvideo/20200603124504/95bffcef2bdac2aad9e32082ce4361b7/0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://img.crawler.qq.com/lolwebvideo/20200603124504/95bffcef2bdac2aad9e32082ce4361b7/0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://img.crawler.qq.com/lolwebvideo/20200603114738/f0bede883bc8f57407a7212c7e43e810/0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://img.crawler.qq.com/lolwebvideo/20200603124504/95bffcef2bdac2aad9e32082ce4361b7/0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://img.crawler.qq.com/lolwebvideo/20200603114738/f0bede883bc8f57407a7212c7e43e810/0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://shp.qpic.cn/cms_pic/2460131880/e7e739cee100423982cb573e11928ddb/258" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://shp.qpic.cn/cms_pic/2640156721/a28ae45e3e40e2f23c592665abe9b02c/258" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://shp.qpic.cn/cms_pic/2631084100/9a9a7f5ccb463e745db3226e38b97180/258" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={this.state.style1}>
                <img src="https://img.crawler.qq.com/lolwebvideo/20200603114738/f0bede883bc8f57407a7212c7e43e810/0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                {/* <div className="masonry">
                <div className="item">
                    <img src="https://ossweb-img.qq.com/upload/adw/image/20200721/bfd591aebb9d37316e78d9c362846d30.jpeg" alt="" />
                </div>
                <div className="item">
                    <img src="https://img.crawler.qq.com/lolwebvideo/20200603124504/95bffcef2bdac2aad9e32082ce4361b7/0" alt="" />
                </div>
                <div className="item">
                    <img src="https://img.crawler.qq.com/lolwebvideo/20200603114738/f0bede883bc8f57407a7212c7e43e810/0" alt="" />
                </div>
                ... */}
                </div>
            </div>
         </div>
     }
 }

 export default Main
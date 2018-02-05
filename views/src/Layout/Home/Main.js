import React, { PureComponent } from 'react';

export default class Main extends PureComponent {
    constructor () {
        super();
        this.state = {
            leftArm: '-',
            leftBody: '(',
            leftFace: '*',
            leftEye: '´',
            center: '∇',
            rightEye: '｀',
            rightFace: '*',
            rightBody: ')',
            rightArm: '-'
        }
    }
    render () {
        return (
            <div className="main">
                <div className="result" data-tip="Click to copy">
                    {
                        this.state.leftArm + 
                        this.state.leftBody + 
                        this.state.leftFace + 
                        this.state.leftEye +
                        this.state.center +
                        this.state.rightEye + 
                        this.state.rightFace + 
                        this.state.rightBody + 
                        this.state.rightArm
                    }
                </div>
                <div className="ctrl">
                    <button>Save</button>
                    <button>❤</button>
                    <button>Share</button>
                </div>
                <section className="factory">
                    <div className="left-arm">{this.state.leftArm}</div>
                    <div className="left-body">{this.state.leftBody}</div>
                    <div className="left-face">{this.state.leftFace}</div>
                    <div className="left-eye">{this.state.leftEye}</div>
                    <div className="center">{this.state.center}</div>
                    <div className="right-eye">{this.state.rightEye}</div>
                    <div className="right-face">{this.state.rightFace}</div>
                    <div className="right-body">{this.state.rightBody}</div>
                    <div className="right-arm">{this.state.rightArm}</div>
                </section>
            </div>
        )
    }
}
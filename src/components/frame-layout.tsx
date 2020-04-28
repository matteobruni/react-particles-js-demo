import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {base16AteliersulphurpoolLight as theme} from 'react-syntax-highlighter/styles/prism';
import {FrameThumbsContainer} from './frame-thumbs-container';
import {ParticlesContainer} from './particles-container';
import {Subscription} from 'rxjs';
import {onKeyPressed} from '../streams/key-pressed';
import { IParticlesParams } from 'react-particles-js';


const getFrameCode = (params: IParticlesParams) => {
    const paramsCode = JSON.stringify(params, null, 4)
        .split('\n')
        .map((x, i) => i > 0 ? `\t${x}` : x)
        .join('\n');
    return `<Particles
    params={${paramsCode}} />`;
}

interface IProps extends Partial<IDefaultProps> {
    name: string;
    backgroundColor: string;
    params: IParticlesParams;
}

interface IDefaultProps {
    wrapperClassName: string;
}

interface IState {
    codeVisible: boolean;
}

export class FrameLayout extends React.Component<IProps, IState> {

    static defaultProps: IDefaultProps = {
        wrapperClassName: '',
    };

    private subscription: Subscription = new Subscription();

    constructor(props: IProps) {
        super(props);
        this.onCodeContainerClick = this.onCodeContainerClick.bind(this);
        this.state = {
            codeVisible: false
        };
    }

    componentDidMount() {
        this.subscription = onKeyPressed.subscribe(keyCode => {
            if (keyCode === 27) {
                this.setState({
                    codeVisible: false
                });
            }
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onCodeContainerClick() {
        if (!this.state.codeVisible) {
            this.setState({
                ...this.state,
                codeVisible: !this.state.codeVisible
            });
        }
    }

    render() {
        return (
            <div
                className={`frame-layout__wrapper ${this.props.wrapperClassName}`}
                style={{
                    background: this.props.backgroundColor
                }}>
                <div className="frame-layout__particles-container">
                    <ParticlesContainer params={this.props.params}></ParticlesContainer>
                </div>
                <div className="frame-layout__container">
                    <div className="frame-layout__content">
                        <div className="frame-layout__name">React Particles JS - {this.props.name} Preset</div>
                        <div
                            className={`frame-layout__code-container ${this.state.codeVisible ? 'expanded' : 'collapsed'}`}
                            onClick={this.onCodeContainerClick}>
                            <SyntaxHighlighter
                                codeTagProps={{
                                    style: {
                                        fontSize: '.7rem'
                                    }
                                }}
                                language={this.state.codeVisible ? 'jsx' : 'text'}
                                style={theme}>
                                {this.state.codeVisible ? getFrameCode(this.props.params) : 'View code'}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="frame-layout__thumbs">
                        <FrameThumbsContainer/>
                    </div>
                </div>

                <div className="frame-layout__footer">
                    <a
                        className="github-mark"
                        href="https://github.com/Wufe/react-particles-js"
                        target="_blank"></a>
                    <span>v3.2.0</span>
                </div>

            </div>
        );
    }
}
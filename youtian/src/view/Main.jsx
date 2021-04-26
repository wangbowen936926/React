import React, {Component} from 'react'
import Tabbar from 'components/tabbar'

import homeIcon from 'assets/tabbar/index.png'
import selectedHomeIcon from 'assets/tabbar/index.png'

import publicIcon from 'assets/tabbar/public.png'
import selectedPublicIcon from 'assets/tabbar/public-sel.png'

import findIcon from 'assets/tabbar/find.png'
import selectedFindIcon from 'assets/tabbar/find-sel.png'

import newIcon from 'assets/tabbar/news.png'
import selectedNewIcon from 'assets/tabbar/news-sel.png'

import myIcon from 'assets/tabbar/my.png'
import selectedMyIcon from 'assets/tabbar/my-sel.png'

import {YouTian} from './module/youtian'
import {Square} from './module/square'
import {Find} from './module/find'
import {News} from './module/news'
import {My} from './module/my'

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                {
                    label: '优甜',
                    iconPath: homeIcon,
                    selectedIconPath: selectedHomeIcon,
                    componentView: YouTian
                },{
                    label: '广场',
                    iconPath: publicIcon,
                    selectedIconPath: selectedPublicIcon,
                    componentView: Square
                },{
                    label: '发现',
                    iconPath: findIcon,
                    selectedIconPath: selectedFindIcon,
                    componentView: Find
                },{
                    label: '消息',
                    iconPath: newIcon,
                    selectedIconPath: selectedNewIcon,
                    componentView: News
                },{
                    label: '我的',
                    iconPath: myIcon,
                    selectedIconPath: selectedMyIcon,
                    componentView: My
                },
            ],
            current: 0
        }
    }

    tabbarChange = (index) => {
        this.setState({current: index});
    }

    render () {
        return (
            <Tabbar {...this.props} list={this.state.list} current={this.state.current} onClick={this.tabbarChange}></Tabbar>
        )
    }
}

export default Main;
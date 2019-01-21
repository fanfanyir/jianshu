import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
  HomeWrapper,
  HomeLeft, 
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {

  handleScrollTop(){
    window.scrollTo(0,0);
  }

  render(){
    return (
        <HomeWrapper>
          <HomeLeft>
            <img 
              className='banner-img' 
              alt=''
              src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
        </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));      
    }
  }
})

export default connect(mapState, mapDispatch)(Home);
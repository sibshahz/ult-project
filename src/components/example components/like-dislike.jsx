import { Component } from 'react';

export default class LikeDislike extends Component {
    constructor(props){
        super(props);
        this.state={
            likes:100,
            dislikes:25,
            likeActive:false,
            dislikeActive:false
        }
    }
    handleLike(){
        if(this.state.dislikeActive){
            this.setState({dislikes:this.state.dislikes-1,likes:this.state.likes+1,likeActive:true,dislikeActive:false});
            return;
        }
        if(this.state.likeActive){
            this.setState({likes:this.state.likes-1,likeActive:false});
        }else{
            this.setState({likes:this.state.likes+1,likeActive:true});
        }
    }
    handleDislike(){
        if(this.state.likeActive){
            this.setState({likes:this.state.likes-1,dislikes:this.state.dislikes+1,dislikeActive:true,likeActive:false});
            return;
        }
        if(this.state.dislikeActive){
            this.setState({dislikes:this.state.dislikes-1,dislikeActive:false});
        }else{
            this.setState({dislikes:this.state.dislikes+1,dislikeActive:true});
        }
    }
    render() {
        return (
            <>
                <div>
                    <button className={this.state.likeActive ? 'like-button liked' : 'like-button'} onClick={()=>this.handleLike()}>Like</button> |
                    <span className='likes-counter'>{this.state.likes}</span>

                    <button className={this.state.dislikeActive ? 'dislike-button disliked' : 'dislike-button'} onClick={()=>this.handleDislike()}>Dislike</button> |
                    <span className='dislikes-counter'>{this.state.dislikes}</span>

                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
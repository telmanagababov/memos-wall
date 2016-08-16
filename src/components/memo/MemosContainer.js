import React from "react";
import Paper from "material-ui/Paper";
import MemoCard from "./MemoCard";
import store from "../../store/Store";

class MemosContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memos: []
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                memos: store.getState().memos
            });
        });
    }

    render() {
        return <Paper style={{backgroundColor: "none"}}>
            {this.state.memos.map((memo, index) =>
                <MemoCard
                        id={memo.id}
                        title={memo.title}
                        url={memo.url}
                        info={memo.info}
                        key={index} />
            )}
        </Paper>;
    }
}

export default MemosContainer;
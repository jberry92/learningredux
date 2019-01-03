import React from "React";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles }
}

const connectedList = ({ articles }) => (
    <ul className="list-group list-group-flish">
        {articles.map(el => (
            <li className="list-group list-group-flush" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(connectedList);

export default List;
import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

class CoursesPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         course: {
    //             title: ""
    //         }
    //     };
    //
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(event) {
    //     const course = { ...this.state.course, title: event.target.value};
    //     this.setState({
    //         course: course,
    //     })
    // }

    //less code and no binding necessary

    state = {
        course: {
            title: ""
        }
    };

    // Another way of writing simple handleChange(event){...} function
    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value};
        this.setState({
            course: course,
        })
    };

    // Doesn't work
    // handleSubmit(event) {
    //     event.preventDefault();
    //     alert(this.state.course.title);
    // }

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    };

    render() {
        return (
            // Submit in form enable the user to submit also by enter key
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                    type={"text"}
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input type={"submit"} value={"Save"}/>
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
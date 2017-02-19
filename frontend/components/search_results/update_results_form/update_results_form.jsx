import { withRouter } from 'react-router';
import { fetchBoundaries, parseBoundaries } from "../../util/search_api_util";
import { render } from 'react-dom';
import ErrorList from '../auth_forms/error_list';

class UpdateResultsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      start_date: "",
      end_date: "",
      guest_no: 1
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.address === "") {
      this.props.fetchSearchSpots({
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        guest_no: this.state.guest_no}
      ).then(() => this.props.router.push("/search"));
    }
    }
  }



  componentWillUnmount() {
    this.props.clearSpotErrors();
  }

  changeInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <form className="search-form" onSubmit={ this.submitForm }>
        <input type="date" onChange={this.changeInput("start_date")}/>
        <input type="date" onChange={this.changeInput("end_date")} />
        <input value={this.state.guest_no}
          onChange={this.changeInput("guest_no")}/>
        <ErrorList errors={ this.props.errors.spot_errors } />
        <input type="submit" />
      </form>
      <div className="search-result-form-container">
        <form onSubmit={ this.submitForm("start_date") }>
          <input type="date" onChange={this.changeInput("start_date")}/>
        </form>
        <form onSubmit={ this.submitForm("end_date") }>
          <input type="date" onChange={this.changeInput("end_Date")}/>
        </form>
        <form onSubmit={ this.submitForm("guest_no") }>
          <input type="date" onChange={this.changeInput("guest_no")}/> // TODO change...this to subcomponent
        </form>
        <form onSubmit={ this.submitForm("entire_home") }>
          <input type="date" onChange={this.changeInput("start_date")}/>
        </form>
        <form onSubmit={ this.submitForm("private_room") }>
          <input type="date" onChange={this.changeInput("start_date")}/>
        </form>
        <form onSubmit={ this.submitForm("shared_room") }>
          <input type="date" onChange={this.changeInput("start_date")}/>
        </form>
        <form onSubmit={ this.submitForm("price_range") }>
          <input type="date" onChange={this.changeInput("start_date")}/>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateResultsForm);

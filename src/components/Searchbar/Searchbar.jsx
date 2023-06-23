import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSearchSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

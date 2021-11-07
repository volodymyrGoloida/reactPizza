import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({
    activeCategory,
    items,
    onClickCategory,
}) {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((el, index) => {
                        return (
                            <li
                                className={
                                    activeCategory === index ? 'active' : ''
                                }
                                onClick={() => onClickCategory(index)}
                                key={`${el}_${index}`}
                            >
                                {el}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
})
Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
}
Categories.defaultProps = {
    activeCategory: null,
    items: [],
}

/*class Categories extends React.Component {
    state = {
        activeCategory: 0,
    }
    onSelectItem = (index) => {
        this.setState({
            activeItem: index,
        })
    }

    render() {
        const { items, onClickItem } = this.props
        return (
            <div className="categories">
                <ul>
                    <li className="active">Все</li>
                    {items.map((el, index) => {
                        return (
                            <li
                                className={
                                    this.state.activeItem === index
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => this.onSelectItem(index)}
                                key={`${el}_${index}`}
                            >
                                {el}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}*/

export default Categories

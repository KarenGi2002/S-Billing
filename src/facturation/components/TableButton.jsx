import { Button } from "antd"
import { PropTypes } from 'prop-types'

export const TableButton = ({iconName, handler}) => {
  return (
    <Button
      type="primary"
      icon={<span className="material-symbols-outlined">{iconName}</span>}
      size="large"
      onClick={handler}
    />
  );
}

TableButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
}

import PropTypes from 'prop-types'
import { Button } from 'antd'

export const AddNewButton = ({ toggleFormPopup, disabled = false }) => {
  return (
    <Button
      type="primary"
      size="large"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.2rem',
        marginLeft: 'auto',
        marginBlock: '1rem'
      }}
      onClick={toggleFormPopup}
      disabled={disabled}
    >
      New
      <span className="material-symbols-outlined">add</span>
    </Button>
  )
}

AddNewButton.propTypes = {
  toggleFormPopup: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

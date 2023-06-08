import { Button } from 'antd'
import { PropTypes } from 'prop-types'

export const Popup = ({ closePopup, children }) => {
  return (
    <section className="popup">
      <div className="popup__container">
        <Button
          type="primary"
          shape="circle"
          icon={<span className="material-symbols-outlined">close</span>}
          size="large"
          onClick={closePopup}
          style={{
            display: 'block',
            width: 'max-content',
            marginLeft: 'auto'
          }}
        />
        {children}
      </div>
    </section>
  )
}

Popup.propTypes = {
  closePopup: PropTypes.func,
  children: PropTypes.node.isRequired
}

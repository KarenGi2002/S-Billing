import { Button, Form, Input } from 'antd'
import { useNavigate, NavLink } from 'react-router-dom'

export const Signup = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const onFinish = () => {
    navigate('/', {
      replace: true
    })
  }
  return (
    <section className="auth">
      <div className="auth__container">
        <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
          >
            <Input placeholder="e.g.: username" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: 'Please input your email!'
              }
            ]}
          >
            <Input placeholder="e.g.: email@gmail.com" type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password placeholder="e.g.: safepassword" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="link">
              <NavLink to="/login">Already have an account?</NavLink>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}
